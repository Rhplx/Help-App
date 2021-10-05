// Native imports
import React from "react";
import AppLoading from "expo-app-loading";

// Styled Components
import Layout from "../Layout";
import UserButton from "../../components/UserButton";
import Header from "../../components/Header";
import Terms from "../../components/Terms";
import {
  CategoriesPeopleContainer,
  CategoriesPeopleCard,
  CategoriesPeopleCardImage,
  CategoriesPeopleCardContent,
  CategoriesPeopleTitle,
  CategoriesPeopleText,
  CategoriesPeopleList,
  CatPeopleListCard,
  CatPeopleListCardImage,
  CatPeopleListCardContent,
  CatPeopleListCardText,
  CatPeopleListCardButton,
} from "../../styles/screens/categories/CategoriesPeople";
import { GeneralWrapper } from "../../styles/GeneralStyles";

// Assets and fonts
import { useFonts, HindMadurai_700Bold, HindMadurai_600SemiBold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import People1Icon from "../../assets/people1.png";
import People2Icon from "../../assets/people2.png";
import HelperIcon from "../../assets/ayudante.png";

export default function CategoriesPeople({ route, navigation }) {

  const { text } = route.params;

  const MockDataPeoples = [
    {
      src: People1Icon,
      text: "Ayudantes personales"
    },
    {
      src: People2Icon,
      text: "Personal de salud y belleza a domicilio"
    },
    {
      src: People1Icon,
      text: "Ayudantes personales 1"
    },
    {
      src: People2Icon,
      text: "Personal de salud y belleza a domicilio 1"
    },
    {
      src: People1Icon,
      text: "Ayudantes personales 2"
    },
    {
      src: People2Icon,
      text: "Personal de salud y belleza a domicilio 2"
    },
    {
      src: People1Icon,
      text: "Ayudantes personales 3"
    },
    {
      src: People2Icon,
      text: "Personal de salud y belleza a domicilio 3"
    }
  ];

  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    HindMadurai_600SemiBold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const handleGoToPeople = (people) => () => {
    navigation.navigate("People", {
      id: 0,
      text: people.text
    });
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Layout>
        <Header>
          <UserButton />
        </Header>
        <CategoriesPeopleContainer>
            <CategoriesPeopleCard>
              <CategoriesPeopleCardImage source={HelperIcon} />
              <CategoriesPeopleCardContent>
                <CategoriesPeopleTitle>{text}</CategoriesPeopleTitle>
                <CategoriesPeopleText>Selecciona alguna persona</CategoriesPeopleText>
              </CategoriesPeopleCardContent>
            </CategoriesPeopleCard>
            <CategoriesPeopleList
              data={MockDataPeoples}
              keyExtractor={item => item.text}
              renderItem={({ item }) =>
                <CatPeopleListCard>
                  <CatPeopleListCardImage source={item.src} />
                  <CatPeopleListCardContent>
                    <CatPeopleListCardText>{item.text}</CatPeopleListCardText>
                    <CatPeopleListCardButton onPress={handleGoToPeople(item)}>
                      <CatPeopleListCardText white>Enviar Mensaje</CatPeopleListCardText>
                    </CatPeopleListCardButton>
                  </CatPeopleListCardContent>
                </CatPeopleListCard>
              }
            />
          <Terms />
        </CategoriesPeopleContainer>
      </Layout>
    );
  }
}
