// Native imports
import React from "react";
import AppLoading from "expo-app-loading";

// Third Party Imports

// Styled Components
import Layout from "./Layout";
import Header from "../components/Header";

import { GeneralWrapper, GeneralTitle } from "../styles/GeneralStyles";
import {
  ConfirmationSubtitle,
  ConfirmationParagraph,
  ConfirmationImage,
} from "../styles/screens/RegisterConfirmationStyles";

// Assets and fonts
import SingAvatar from "../assets/cantante.png";
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function RegisterConfirmation() {
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
          <GeneralTitle>Luis Fernando Lopez Montoya</GeneralTitle>
          <ConfirmationSubtitle>¡Gracias!</ConfirmationSubtitle>
          <ConfirmationParagraph>
            Enviamos un mensaje de confirmación a tu correo electrónico,
            continua con los pasos para acceder a tu cuenta.
          </ConfirmationParagraph>
          <ConfirmationImage source={SingAvatar} />
        </GeneralWrapper>
      </Layout>
    );
  }
}
