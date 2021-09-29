// Native imports
import React from "react";
import AppLoading from "expo-app-loading";

// Third Party Imports
import BouncyCheckbox from "react-native-bouncy-checkbox";

// Styled Components
import {
  PaypalGeneral,
  PayPalRow,
  PaypalTitleWrapper,
  PaypalTitle,
  PaypalLogo,
  PaypalLogoWrapper,
  PaypalAnual,
  PaypalAnualTitle,
  PaypalCheckboxWrapper,
  LastPaypalRow,
} from "../styles/components/PaypalPlanStyles";

// Assets and fonts
import PaypalImage from "../assets/paypal-logo.png";
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function Login() {
  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <PaypalGeneral>
        <PayPalRow>
          <PaypalTitleWrapper>
            <PaypalTitle>Seleccionar Plan</PaypalTitle>
          </PaypalTitleWrapper>
          <PaypalLogoWrapper>
            <PaypalLogo source={PaypalImage} />
          </PaypalLogoWrapper>
        </PayPalRow>
        <PayPalRow bottom>
          <PaypalAnual>
            <PaypalAnualTitle bold>ANUAL - $499</PaypalAnualTitle>
            <PaypalAnualTitle>
              Siguiente pago: 5 Septiembre 2022
            </PaypalAnualTitle>
          </PaypalAnual>
          <PaypalCheckboxWrapper>
            <BouncyCheckbox
              size={20}
              fillColor="#EF0E73"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "#EF0E73" }}
              style={{ marginLeft: 20 }}
            />
          </PaypalCheckboxWrapper>
        </PayPalRow>
        <LastPaypalRow>
          <PaypalAnual last>
            <PaypalAnualTitle bold>ANUAL - $499</PaypalAnualTitle>
            <PaypalAnualTitle>
              Siguiente pago: 5 Septiembre 2022
            </PaypalAnualTitle>
          </PaypalAnual>
          <PaypalCheckboxWrapper last>
            <BouncyCheckbox
              size={20}
              fillColor="#EF0E73"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "#EF0E73" }}
              style={{ marginLeft: 20 }}
            />
          </PaypalCheckboxWrapper>
        </LastPaypalRow>
      </PaypalGeneral>
    );
  }
}
