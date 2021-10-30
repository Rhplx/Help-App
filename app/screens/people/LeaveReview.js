import React from "react";
import AppLoading from "expo-app-loading";

// Styled Components & Components
import Layout from "../Layout";
import Header from "../../components/Header";
import UserButton from "../../components/UserButton";
import {
  PeopleContainer,
  PeopleSubtitle,
  LeaveReview,
  LeaveStarsWrapper
} from "../../styles/screens/people/People";
import {
  GeneralTitle,
  GeneralInput,
  RegisterButton,
  RegisterButtonText
} from "../../styles/GeneralStyles";
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
          <GeneralTitle>Deja una reseña a Luis Fernando Lopez</GeneralTitle>
          <PeopleSubtitle>Escribe o edita una Reseña (pública)</PeopleSubtitle>
          <LeaveReview>
            <LeaveStarsWrapper>
              <PeopleSubtitle>Stars</PeopleSubtitle>
            </LeaveStarsWrapper>
            <GeneralInput name="title" placeholder="Titulo de la reseña" />
            <GeneralInput
              name="review"
              placeholder="Reseña"
              multiline
              numberOfLines={4}
              style={{ height: 200, textAlignVertical: "top" }}
            />
            <RegisterButton>
              <RegisterButtonText>Guardar reseña</RegisterButtonText>
            </RegisterButton>
          </LeaveReview>
        </PeopleContainer>
      </Layout>
    );
  }
}
