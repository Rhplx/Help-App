// Native imports
import React from "react";
import AppLoading from "expo-app-loading";

// Third Party Imports

// Styled Components
import Layout from "./Layout";
import Header from "../components/Header";
import {
  ChatGeneral,
  ChatWrapper,
  ChatTitleWrapper,
  ChatTitle,
  ChatSubtitleWrapper,
  ChatSubtitle,
} from "../styles/screens/ChatWithStyles";
import {
  GeneralWrapper,
  GeneralTitle,
  GeneralSubtitle,
} from "../styles/GeneralStyles";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function ChatWith() {
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
          <GeneralTitle>Tus chats</GeneralTitle>
          <GeneralSubtitle>
            Escríbele a las personas que te escribieron para solicitar tus
            servicios
          </GeneralSubtitle>
          <ChatGeneral>
            <ChatWrapper>
              <ChatTitleWrapper pink>
                <ChatTitle>Chatear con “Nombre de la Persona”</ChatTitle>
              </ChatTitleWrapper>
              <ChatSubtitleWrapper>
                <ChatSubtitle>
                  Último mensaje: 25/08/21 - 15:32 hrs
                </ChatSubtitle>
              </ChatSubtitleWrapper>
            </ChatWrapper>
            <ChatWrapper>
              <ChatTitleWrapper>
                <ChatTitle>Chatear con “Nombre de la Persona”</ChatTitle>
              </ChatTitleWrapper>
            </ChatWrapper>
          </ChatGeneral>
        </GeneralWrapper>
      </Layout>
    );
  }
}
