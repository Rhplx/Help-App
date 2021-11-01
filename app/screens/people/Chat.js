import React from "react";
import AppLoading from "expo-app-loading";

// Styled Components & Components
import Layout from "../Layout";
import Header from "../../components/Header";
import UserButton from "../../components/UserButton";
import {
  ChatContainer,
  ChatTitle,
  ChatWrapper,
  ChatRow,
  ChatTextWrapper,
  ChatText,
  ChatDate,
  SendWrapper,
  SendInput,
  SendButton,
  SendText,
  SendIcon
} from "../../styles/screens/people/Chat";
// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import SendImage from "../../assets/send.png";

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
        <ChatContainer>
          <ChatTitle>Enviar un mensaje a Luis Fernando Lopez</ChatTitle>
          <ChatWrapper>
            <ChatRow left>
              <ChatTextWrapper>
                <ChatText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  blandit enim lectus, et pharetra turpis efficitur sed. Duis
                  sapien lectus, commodo pretium bibendum eget, consequat a
                  neque.
                </ChatText>
                <ChatDate>11:20PM - 10/10/20</ChatDate>
              </ChatTextWrapper>
            </ChatRow>
            <ChatRow>
              <ChatTextWrapper>
                <ChatText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  blandit enim lectus, et pharetra turpis efficitur sed. Duis
                  sapien lectus, commodo pretium bibendum eget, consequat a
                  neque.
                </ChatText>
                <ChatDate>11:20PM - 10/10/20</ChatDate>
              </ChatTextWrapper>
            </ChatRow>
          </ChatWrapper>
        </ChatContainer>
        <SendWrapper>
          <SendInput placeholder="Escribe tu mensaje" multilinea />
          <SendButton>
            <SendText>Enviar</SendText>
            <SendIcon source={SendImage} />
          </SendButton>
        </SendWrapper>
      </Layout>
    );
  }
}
