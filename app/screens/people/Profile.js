import React from "react";
import AppLoading from "expo-app-loading";
import { Text, View } from "react-native";

// Styled Components & Components
import Layout from "../Layout";
import Header from "../../components/Header";
import {
  ProfileContainer,
  ProfileHeader,
  ProfileHeaderImage,
  ProfileHeaderTitle,
  ProfileInfo,
  ProfilePlansBox,
  ProfilePlan,
  ProfileData,
  ProfileDataHeader,
  ProfileDataTitle,
  ProfileDataButton,
  ProfileDataButtonText,
  ProfileDataTextRow,
  ProfileDataText
} from "../../styles/screens/people/Profile";
import {
  PlansBoxTitleWrapper,
  PlansBoxTitle,
  PlansBoxSubtitleWrapper,
  PlansBoxSubtitle,
  PlansBoxTitleWrapperTwo,
  PlansBoxSubtitleWrapperTwo
} from "../../styles/screens/LoginPlanStyles";
import {
  PaypalGeneral,
  PayPalRow,
  PaypalTitleWrapper,
  PaypalTitle,
  PaypalLogo,
  PaypalLogoWrapper,
  PaypalAnual,
  PaypalAnualTitle,
  PaypalCheckboxWrapper
} from "../../styles/components/PaypalPlanStyles";
import { GeneralSubtitle } from "../../styles/GeneralStyles";
// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import Example from "../../assets/people.png";
import PaypalImage from "../../assets/paypal-logo.png";

export default function Profile({ route, navigation }) {
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
        <Header />
        <ProfileContainer>
          <ProfileHeader>
            <ProfileHeaderImage source={Example} />
            <ProfileHeaderTitle>Hola</ProfileHeaderTitle>
          </ProfileHeader>
          <GeneralSubtitle>Tus datos, chats y reseñas</GeneralSubtitle>
          <ProfileInfo>
            <ProfilePlansBox>
              <PlansBoxTitleWrapper pink>
                <PlansBoxTitle>Mis chats</PlansBoxTitle>
              </PlansBoxTitleWrapper>
              <PlansBoxSubtitleWrapper wine>
                <PlansBoxTitle>25 contactos</PlansBoxTitle>
                <PlansBoxSubtitle yellow>5 activos</PlansBoxSubtitle>
              </PlansBoxSubtitleWrapper>
            </ProfilePlansBox>
            <ProfilePlansBox>
              <PlansBoxTitleWrapperTwo>
                <PlansBoxTitle>Mis reseñas</PlansBoxTitle>
              </PlansBoxTitleWrapperTwo>
              <PlansBoxSubtitleWrapperTwo>
                <PlansBoxTitle>15 reseñas</PlansBoxTitle>
              </PlansBoxSubtitleWrapperTwo>
            </ProfilePlansBox>
          </ProfileInfo>
          <ProfilePlan>
            <PaypalGeneral>
              <PayPalRow>
                <PaypalTitleWrapper>
                  <PaypalTitle>Seleccionar Plan</PaypalTitle>
                </PaypalTitleWrapper>
                <PaypalLogoWrapper>
                  <PaypalLogo source={PaypalImage} />
                </PaypalLogoWrapper>
              </PayPalRow>
              <PayPalRow>
                <PaypalAnual>
                  <PaypalAnualTitle bold>ANUAL - $499</PaypalAnualTitle>
                  <PaypalAnualTitle>
                    Siguiente pago: 5 Septiembre 2022
                  </PaypalAnualTitle>
                </PaypalAnual>
                <PaypalCheckboxWrapper>
                  <PaypalTitle>Pagar</PaypalTitle>
                </PaypalCheckboxWrapper>
              </PayPalRow>
            </PaypalGeneral>
          </ProfilePlan>
          <ProfileData>
            <ProfileDataHeader>
              <ProfileDataTitle>Datos de contacto</ProfileDataTitle>
              <ProfileDataButton>
                <ProfileDataButtonText>Editar</ProfileDataButtonText>
              </ProfileDataButton>
            </ProfileDataHeader>
            <ProfileDataTextRow>
              <ProfileDataText bold>Email: </ProfileDataText>
              <ProfileDataText>pikachu@gmail.com</ProfileDataText>
            </ProfileDataTextRow>
            <ProfileDataTextRow>
              <ProfileDataText bold>Tel: </ProfileDataText>
              <ProfileDataText>00004545454</ProfileDataText>
            </ProfileDataTextRow>
            <ProfileDataTextRow>
              <ProfileDataText bold>WhatsApp: </ProfileDataText>
              <ProfileDataText>00004545454</ProfileDataText>
            </ProfileDataTextRow>
            <ProfileDataTextRow>
              <ProfileDataText bold>Ciudad: </ProfileDataText>
              <ProfileDataText>Queretaro</ProfileDataText>
            </ProfileDataTextRow>
          </ProfileData>
          <ProfileData>
            <ProfileDataHeader>
              <ProfileDataTitle>Servicios registrados</ProfileDataTitle>
              <ProfileDataButton>
                <ProfileDataButtonText>Editar</ProfileDataButtonText>
              </ProfileDataButton>
            </ProfileDataHeader>
            <ProfileDataTextRow>
              <ProfileDataText>* Subcategoria</ProfileDataText>
            </ProfileDataTextRow>
            <ProfileDataTextRow>
              <ProfileDataText>
                * Subcategoria en la que esta inscrito el dude este
              </ProfileDataText>
            </ProfileDataTextRow>
            <ProfileDataTextRow>
              <ProfileDataText> * hola hola hola</ProfileDataText>
            </ProfileDataTextRow>
          </ProfileData>
          <ProfileData>
            <ProfileDataHeader>
              <ProfileDataTitle>Servicios registrados</ProfileDataTitle>
              <ProfileDataButton>
                <ProfileDataButtonText>Editar</ProfileDataButtonText>
              </ProfileDataButton>
            </ProfileDataHeader>
            <ProfileDataTextRow>
              <ProfileDataText>* Subcategoria</ProfileDataText>
            </ProfileDataTextRow>
            <ProfileDataTextRow>
              <ProfileDataText>
                * Subcategoria en la que esta inscrito el dude este
              </ProfileDataText>
            </ProfileDataTextRow>
            <ProfileDataTextRow>
              <ProfileDataText> * hola hola hola</ProfileDataText>
            </ProfileDataTextRow>
          </ProfileData>
          <ProfileData>
            <ProfileDataHeader>
              <ProfileDataTitle>Presentación</ProfileDataTitle>
              <ProfileDataButton>
                <ProfileDataButtonText>Editar</ProfileDataButtonText>
              </ProfileDataButton>
            </ProfileDataHeader>
            <ProfileDataTextRow>
              <ProfileDataText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                molestie libero efficitur vulputate aliquam. Etiam sit amet
                consectetur ante, nec malesuada turpis. Nulla at massa ac leo
                fermentum accumsan.
              </ProfileDataText>
            </ProfileDataTextRow>
          </ProfileData>
          <View style={{ height: 100 }}></View>
        </ProfileContainer>
      </Layout>
    );
  }
}
