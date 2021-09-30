// Native imports
import React from "react";
import AppLoading from "expo-app-loading";

// Third Party Imports
import BouncyCheckbox from "react-native-bouncy-checkbox";

// Styled Components
import Layout from "./Layout";
import Header from "../components/Header";
import PaypalPlan from "../components/PaypalPlan";

import {
  GeneralWrapper,
  GeneralTitle,
  TermsRow,
  TermsRowText,
  TermsRowCheckbox,
  RegisterButton,
  RegisterButtonText,
} from "../styles/GeneralStyles";
import {
  ConfirmationSubtitle,
  ConfirmationParagraph,
} from "../styles/screens/RegisterConfirmationStyles";

// Assets and fonts
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
          <ConfirmationSubtitle>Cuenta limitada</ConfirmationSubtitle>
          <ConfirmationParagraph>
            Tu cuentan ha sido limitada y no aparece en los resultados de
            búsqueda. Por favor selecciona una opción de nuestros planes de pago
            para continuar con tus conversaciones.
          </ConfirmationParagraph>
          <PaypalPlan />
          <TermsRow>
            <TermsRowText>
              Acepto los terminos y condiciones del servicio
            </TermsRowText>
            <TermsRowCheckbox>
              <BouncyCheckbox
                size={20}
                fillColor="#EF0E73"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "#EF0E73" }}
                style={{ marginLeft: 20 }}
              />
            </TermsRowCheckbox>
          </TermsRow>
          <RegisterButton>
            <RegisterButtonText>Pagar</RegisterButtonText>
          </RegisterButton>
        </GeneralWrapper>
      </Layout>
    );
  }
}
