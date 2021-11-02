import React from "react";
import AppLoading from "expo-app-loading";
import { Alert } from "react-native";

// External Imports
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearAsyncStorage } from "../../common/syncStorage";
import { checkSession, getBaseApi } from "../../common/functions";

// Third Party Imports
import { Formik } from "formik";
import * as yup from "yup";

// Styled Components & Components
import Layout from "../Layout";
import Header from "../../components/Header";
import UserButton from "../../components/UserButton";
import {
  ChatContainer,
  ChatTitle,
  ChatWrapper,
  ChatRow,
  ChatRowLeft,
  ChatTextWrapper,
  ChatText,
  ChatDate,
  SendWrapper,
  SendInput,
  SendButton,
  SendText,
  SendIcon,
} from "../../styles/screens/people/Chat";
// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import SendImage from "../../assets/send.png";

export default function PeopleReview({ route, navigation }) {
  const { name, id, message } = route.params;
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      checkSession(navigation);
      getChatMessages();
    });
  }, []);

  const getChatMessages = async () => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    fetch(getBaseApi() + "/manage/Message?user=" + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionId,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          setMessages(response.data.messages);
        } else {
          if (response.error === "Error: Sesión Invalida") {
            clearAsyncStorage(navigation);
          } else {
            Alert.alert("Ooops :(", response.error, [
              {
                text: "Ok",
              },
            ]);
          }
        }
      })
      .catch((error) => console.log("error", error));
  };

  const peopleMessageValidationSchema = yup.object().shape({
    message: yup.string().required("Mensaje requerido"),
  });

  const insertMessage = async (values, actions) => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    values["userTo"] = id;
    fetch(getBaseApi() + "/manage/Message", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + sessionId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          actions.resetForm({ message: "" });
        } else {
          if (response.error === "Error: Sesión Invalida") {
            clearAsyncStorage(navigation);
          } else {
            Alert.alert("Ooops :(", response.error);
          }
        }
      })
      .catch((error) => console.log("error", error));
  };

  const renderMessages = () => {
    return messages.map((item, index) => {
      if (item.ufrom !== id) {
        return (
          <ChatRowLeft key={"message" + index}>
            <ChatTextWrapper>
              <ChatText>{item.message}</ChatText>
              <ChatDate>{item.insertDate}</ChatDate>
            </ChatTextWrapper>
          </ChatRowLeft>
        );
      }
      return (
        <ChatRow key={"message" + index}>
          <ChatTextWrapper>
            <ChatText>{item.message}</ChatText>
            <ChatDate>{item.insertDate}</ChatDate>
          </ChatTextWrapper>
        </ChatRow>
      );
    });
  };

  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Layout>
        <Header>
          <UserButton navigation={navigation} />
        </Header>
        <ChatContainer>
          <ChatTitle>Enviar un mensaje a {name}</ChatTitle>
          <ChatWrapper>{renderMessages()}</ChatWrapper>
        </ChatContainer>
        <Formik
          validationSchema={peopleMessageValidationSchema}
          initialValues={{ message: message }}
          onSubmit={insertMessage}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <SendWrapper>
              <SendInput
                onChangeText={handleChange("message")}
                onBlur={handleBlur("message")}
                placeholder="Escribe tu mensaje"
                multilinea
                value={values.message}
              />
              <SendButton onPress={handleSubmit}>
                <SendText>Enviar</SendText>
                <SendIcon source={SendImage} />
              </SendButton>
            </SendWrapper>
          )}
        </Formik>
      </Layout>
    );
  }
}
