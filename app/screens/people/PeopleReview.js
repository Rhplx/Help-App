import React from "react";
import AppLoading from "expo-app-loading";

// Styled Components & Components
import Layout from "../Layout";
import Header from "../../components/Header";
import UserButton from "../../components/UserButton";
import {
  PeopleContainer,
  PeopleSubtitle,
  PeopleReviewRow,
  PeopleReviewStars,
  PeopleReviewName,
  PeopleReviewNameText,
  PeopleReviewWrapper,
  PeopleReviewEntireText,
  PeopleReviewDate
} from "../../styles/screens/people/People";
import { GeneralTitle } from "../../styles/GeneralStyles";
// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function PeopleReview({ route, navigation }) {
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
          <UserButton />
        </Header>
        <PeopleContainer>
          <GeneralTitle>Luis Fernando Lopez Montoya</GeneralTitle>
          <PeopleSubtitle>Tus reseñas obtenidas</PeopleSubtitle>
          <PeopleReviewWrapper>
            <PeopleReviewRow>
              <PeopleReviewStars>
                <PeopleReviewNameText>Hola</PeopleReviewNameText>
              </PeopleReviewStars>
              <PeopleReviewName>
                <PeopleReviewNameText>Hola</PeopleReviewNameText>
              </PeopleReviewName>
            </PeopleReviewRow>
            <PeopleReviewEntireText>
              Reseña dejada vid, kiwi, piña y fugaz jamón. Fabio me exige, sin
              tapujos, que añada cerveza al whisky.
            </PeopleReviewEntireText>
            <PeopleReviewDate>07/02/2020</PeopleReviewDate>
          </PeopleReviewWrapper>
          <PeopleReviewWrapper>
            <PeopleReviewRow>
              <PeopleReviewStars>
                <PeopleReviewNameText>Hola</PeopleReviewNameText>
              </PeopleReviewStars>
              <PeopleReviewName>
                <PeopleReviewNameText>Hola</PeopleReviewNameText>
              </PeopleReviewName>
            </PeopleReviewRow>
            <PeopleReviewEntireText>
              Reseña dejada vid, kiwi, piña y fugaz jamón. Fabio me exige, sin
              tapujos, que añada cerveza al whisky.
            </PeopleReviewEntireText>
            <PeopleReviewDate>07/02/2020</PeopleReviewDate>
          </PeopleReviewWrapper>
        </PeopleContainer>
      </Layout>
    );
  }
}
