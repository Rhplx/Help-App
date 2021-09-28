// Native imports
import React from "react";
import AppLoading from "expo-app-loading";

// Styled Components
import Layout from "./Layout";
import Header from "../components/Header";
import {
  PlansWrapper,
  PlansBox,
  PlansBoxTitleWrapper,
  PlansBoxTitle,
  PlansBoxSubtitleWrapper,
  PlansBoxSubtitle,
  PlansBoxTitleWrapperTwo,
  PlansBoxSubtitleWrapperTwo,
} from "../styles/screens/LoginPlanStyles";
import { GeneralTitle, GeneralSubtitle } from "../styles/GeneralStyles";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function LoginPlan() {
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
        <PlansWrapper>
          <GeneralTitle>Selecciona una opción</GeneralTitle>
          <GeneralSubtitle>
            Selecciona una opción para tu registro. Aprovecha el perido de
            prueba gratuito para ofrecer tus servicios.
          </GeneralSubtitle>
          <PlansBox>
            <PlansBoxTitleWrapper pink>
              <PlansBoxTitle>Ofrecer mis servicios</PlansBoxTitle>
            </PlansBoxTitleWrapper>
            <PlansBoxSubtitleWrapper wine>
              <PlansBoxSubtitle yellow>
                Ofrece gratis* tus servicios como persona física
              </PlansBoxSubtitle>
            </PlansBoxSubtitleWrapper>
          </PlansBox>
          <PlansBox>
            <PlansBoxTitleWrapper>
              <PlansBoxTitle>Registrar una empresa</PlansBoxTitle>
            </PlansBoxTitleWrapper>
            <PlansBoxSubtitleWrapper>
              <PlansBoxSubtitle>
                Ofrece gratis* los servicios de tu empresa a nuestros usuarios
              </PlansBoxSubtitle>
            </PlansBoxSubtitleWrapper>
          </PlansBox>
          <PlansBox>
            <PlansBoxTitleWrapperTwo>
              <PlansBoxTitle>Buscar servicios</PlansBoxTitle>
            </PlansBoxTitleWrapperTwo>
            <PlansBoxSubtitleWrapperTwo>
              <PlansBoxSubtitle yellow>
                Registrate gratis para buscar servicios de particulares y
                empresas
              </PlansBoxSubtitle>
            </PlansBoxSubtitleWrapperTwo>
          </PlansBox>
        </PlansWrapper>
      </Layout>
    );
  }
}
