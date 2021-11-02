import React from "react";
import AppLoading from "expo-app-loading";
import { Text, Alert } from "react-native";

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
import MessageButton from "../../components/MessageButton";
import {
  PeopleSubtitle,
  PeopleHeader,
  PeopleImageContainer,
  PeopleImageContent,
  PeopleImage,
  PeopleFavorite,
  PeopleFavoriteIcon,
  PeopleReviewsContainer,
  PeopleReviews,
  PeopleReviewsText,
  PeopleReviewsStars,
  PeopleReviewsStar,
  PeopleServices,
  PeopleService,
  PeopleDescription,
  PeopleContent,
  PeopleButton,
  PeopleButtonText,
  PeopleActions,
  PeopleButtonIcon,
  PeopleContainer,
} from "../../styles/screens/people/People";
import { GeneralInput, GeneralTitle } from "../../styles/GeneralStyles";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import PeopleIMG from "../../assets/people.png";
import FavoriteIcon from "../../assets/favorite.png";
import StarIcon from "../../assets/start.png";
import MaximizeIcon from "../../assets/iconMaximize.png";

export default function People({ route, navigation }) {
  const { name, id } = route.params;
  const [provider, setProvider] = React.useState({});

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      checkSession(navigation);
      getProviderById();
    });
  }, []);

  const getProviderById = async () => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    fetch(getBaseApi() + "/manage/Provider?provider=" + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionId,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          setProvider(response.data);
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

  const renderStars = () => {
    let stars = [];
    if (provider.reviews) {
      for (let i = 0; i < provider.reviews.stars; i++) {
        stars.push(<PeopleReviewsStar source={StarIcon} key={"start" + i} />);
      }
    }
    return stars;
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
          Alert.alert("Éxito", "Tu mensaje ha sido enviado");
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

  const handleMaximize = (message) => () => {
    navigation.navigate("Chat", {
      id: id,
      name,
      message,
    });
  };

  const handleSendReview = () => {
    navigation.navigate("LeaveReview", {
      id: id,
      name,
    });
  };

  const handleViewReviews = () => {
    navigation.navigate("PeopleReview", {
      id: id,
      name,
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
          <MessageButton />
        </Header>
        <PeopleContainer>
          <GeneralTitle>{name}</GeneralTitle>
          <PeopleSubtitle>
            Envíale un mensaje para solicitar sus servicios, o enviale un
            mensaje o enviarle un mensajes mediante WhatsApp
          </PeopleSubtitle>
          <PeopleHeader>
            <PeopleImageContainer>
              <PeopleImageContent>
                <PeopleFavorite onPress={handleSendReview}>
                  <PeopleFavoriteIcon source={FavoriteIcon} />
                </PeopleFavorite>
                <PeopleImage
                  source={
                    provider.profileImage
                      ? { uri: provider.profileImage }
                      : PeopleIMG
                  }
                />
                {provider.reviews && (
                  <PeopleReviewsContainer onPress={handleViewReviews}>
                    <PeopleReviews>
                      <PeopleReviewsText>
                        {provider.reviews.quantity} Reseña
                        {provider.reviews.quantity > 1 && "s"}
                      </PeopleReviewsText>
                    </PeopleReviews>
                    <PeopleReviewsStars>{renderStars()}</PeopleReviewsStars>
                  </PeopleReviewsContainer>
                )}
              </PeopleImageContent>
            </PeopleImageContainer>
            <PeopleServices
              data={provider.services}
              keyExtractor={(item, index) => `${item.name}-${index}`}
              renderItem={({ item }) => (
                <PeopleService>{item.name}</PeopleService>
              )}
            />
          </PeopleHeader>
          <PeopleDescription>{provider.details}</PeopleDescription>
          <PeopleContent>
            <Formik
              validationSchema={peopleMessageValidationSchema}
              initialValues={{ message: "" }}
              onSubmit={insertMessage}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                  <GeneralInput
                    multiline
                    numberOfLines={4}
                    onChangeText={handleChange("message")}
                    onBlur={handleBlur("message")}
                    placeholder="Escribe un mensaje"
                    name="message"
                    value={values.message}
                  />
                  {errors.message && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.message}
                    </Text>
                  )}
                  <PeopleActions>
                    <PeopleButton icon onPress={handleMaximize(values.message)}>
                      <PeopleButtonIcon source={MaximizeIcon} />
                    </PeopleButton>
                    <PeopleButton onPress={handleSubmit}>
                      <PeopleButtonText>Enviar mensaje</PeopleButtonText>
                    </PeopleButton>
                  </PeopleActions>
                </>
              )}
            </Formik>
          </PeopleContent>
        </PeopleContainer>
      </Layout>
    );
  }
}
