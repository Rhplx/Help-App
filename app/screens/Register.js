// Native imports
import React from "react";
import AppLoading from "expo-app-loading";

// Styled Components
import { Text } from "react-native";
import Layout from "./Layout";
import Header from "../components/Header";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function Register() {
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
      </Layout>
    );
  }
}
