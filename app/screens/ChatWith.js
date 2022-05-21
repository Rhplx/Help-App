// Native imports
import React from "react";
import AppLoading from "expo-app-loading";
import { Alert } from "react-native";

// External Imports
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearAsyncStorage } from "../common/syncStorage";
import { checkSession, getBaseApi } from "../common/functions";

// Third Party Imports

// Styled Components
import Layout from "./Layout";
import Header from "../components/Header";
import {
  ChatGeneral,
  ChatWrapper,
  ChatTitleWrapper,
  ChatTitle,
  ChatSubtitleWrapper,
  ChatSubtitle,
} from "../styles/screens/ChatWithStyles";
import {
  GeneralWrapper,
  GeneralTitle,
  GeneralSubtitle,
} from "../styles/GeneralStyles";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function ChatWith({ route, navigation }) {
  const [chats, setChats] = React.useState([]);
  const { userId } = route.params;

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      checkSession(navigation);
      getChats();
    });
  }, []);

  const getChats = async () => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    fetch(getBaseApi() + "/manage/Message", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionId,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          setChats(response.data);
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

  const handleChat = (id, name) => {
    navigation.navigate("Chat", {
      id: id,
      name,
    });
  };

  const renderChats = () => {
    return chats.map((item, index) => {
      return (
        <ChatWrapper
          key={"chat" + index}
          onPress={() =>
            handleChat(
              item.idUserFrom != userId ? item.idUserFrom : item.idUserTo,
              item.fullName
            )
          }
        >
          <ChatTitleWrapper pink={index === 0}>
            <ChatTitle>Chatear con {item.fullName}</ChatTitle>
          </ChatTitleWrapper>
          <ChatSubtitleWrapper pink={index === 0}>
            <ChatSubtitle>Último mensaje: {item.insertDate}</ChatSubtitle>
          </ChatSubtitleWrapper>
        </ChatWrapper>
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
        <Header />
        <GeneralWrapper>
          <GeneralTitle>Tus chats</GeneralTitle>
          <GeneralSubtitle>
            Escríbele a las personas que te escribieron para solicitar tus
            servicios
          </GeneralSubtitle>
          <ChatGeneral>{renderChats()}</ChatGeneral>
        </GeneralWrapper>
      </Layout>
    );
  }
}
