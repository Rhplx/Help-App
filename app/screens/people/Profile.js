import React from "react";
import AppLoading from "expo-app-loading";
import { Text } from "react-native";

// Third Party Imports
import { Formik } from "formik";
import * as yup from "yup";

// Styled Components & Components
import Layout from "../Layout";
import Header from "../../components/Header";
import MessageButton from "../../components/MessageButton";
import Terms from "../../components/Terms";
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
  PeopleContainer
} from "../../styles/screens/people/People";
import {
  GeneralInput,
  GeneralTitle,
  GeneralWrapper
} from "../../styles/GeneralStyles";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import PeopleIMG from "../../assets/people.png";
import FavoriteIcon from "../../assets/favorite.png";
import StarIcon from "../../assets/start.png";
import MaximizeIcon from "../../assets/iconMaximize.png";

export default function Profile({ route, navigation }) {
  const { text } = route.params;

  const peopleServices = [
    {
      text: "SERVICIO QUE OFRECE SEGUNDA LÍNEA"
    },
    {
      text: "SERVICIO QUE OFRECE"
    },
    {
      text: "SERVICIO QUE OFRECE"
    }
  ];

  const peopleMessageValidationSchema = yup.object().shape({
    message: yup.string().required("Mensaje requerido")
  });

  const handleMaximaze = (message) => () => {
    navigation.navigate("PeopleMessage", {
      id: 0,
      text,
      message
    });
  };

  const handleSendReview = () => {
    navigation.navigate("PeopleSendReview", {
      id: 0
    });
  };

  const handleViewReviews = () => {
    navigation.navigate("PeopleReviews", {
      id: 0
    });
  };

  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
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
          <GeneralTitle>{text}</GeneralTitle>
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
                <PeopleImage source={PeopleIMG} />
                <PeopleReviewsContainer onPress={handleViewReviews}>
                  <PeopleReviews>
                    <PeopleReviewsText>15 Reseñas</PeopleReviewsText>
                  </PeopleReviews>
                  <PeopleReviewsStars>
                    <PeopleReviewsStar source={StarIcon} />
                    <PeopleReviewsStar source={StarIcon} />
                    <PeopleReviewsStar source={StarIcon} />
                    <PeopleReviewsStar source={StarIcon} />
                    <PeopleReviewsStar source={StarIcon} />
                  </PeopleReviewsStars>
                </PeopleReviewsContainer>
              </PeopleImageContent>
            </PeopleImageContainer>
            <PeopleServices
              data={peopleServices}
              keyExtractor={(item, index) => `${item.text}-${index}`}
              renderItem={({ item }) => (
                <PeopleService>{item.text}</PeopleService>
              )}
            />
          </PeopleHeader>
          <PeopleDescription>
            Descripción breve, kiwi, piña y fugaz jamón. Fabio me exige, sin
            tapujos, que añada ujos, que añada cerveza al whisky breve, kiwi,
            piña y fugaz jamón. Que añada ujos, que añada cerveza al whisky
            breve, kiwi, piña y fugaz jamón.
          </PeopleDescription>
          <PeopleContent>
            <Formik
              validationSchema={peopleMessageValidationSchema}
              initialValues={{ message: "" }}
              onSubmit={(values) => console.log(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid
              }) => (
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
                    <PeopleButton icon onPress={handleMaximaze(values.message)}>
                      <PeopleButtonIcon source={MaximizeIcon} />
                    </PeopleButton>
                    <PeopleButton onPress={handleSubmit}>
                      <PeopleButtonText>Enviar mensage</PeopleButtonText>
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
