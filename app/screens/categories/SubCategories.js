// Native imports
import React from "react";
import AppLoading from "expo-app-loading";
import { Text } from "react-native";

// Styled Components
import Layout from "../Layout";
import UserButton from "../../components/UserButton";
import Header from "../../components/Header";
import {
  SubCatCard,
  SubCatCardContent,
  SubCatCardImage,
  SubCategoriesContainer,
  SubCategoriesTitle,
  SubCategoriesText,
  SubCategoriesList,
  SubCategoriesListLink,
  SubCategoriesListText,
  SubCategoriesTerms,
  SubCategoriesLink,
} from "../../styles/screens/categories/SubCategories";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import HelperIcon from "../../assets/ayudante1.png";

export default function SubCategories({ route, navigation }) {

  const { text } = route.params;

  const MockDataServices = [
    {
      text: "Ayudantes personales"
    },
    {
      text: "Personal de salud y belleza a domicilio"
    },
    {
      text: "Ayudantes personales 1"
    },
    {
      text: "Personal de salud y belleza a domicilio 1"
    },
    {
      text: "Ayudantes personales 2"
    },
    {
      text: "Personal de salud y belleza a domicilio 2"
    },
    {
      text: "Ayudantes personales 3"
    },
    {
      text: "Personal de salud y belleza a domicilio 3"
    }
  ];

  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const handleChoosePeople = (people) => () => {
    navigation.navigate("CategoriesPeople", {
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
        <SubCategoriesContainer>
          <SubCatCard>
            <SubCatCardImage source={HelperIcon} />
            <SubCatCardContent>
              <SubCategoriesTitle>{text}</SubCategoriesTitle>
              <SubCategoriesText>Selecciona el servicio que necesitas</SubCategoriesText>
            </SubCatCardContent>
          </SubCatCard>
          <SubCategoriesList
            data={MockDataServices}
            keyExtractor={item => item.text}
            renderItem={({ item }) =>
              <SubCategoriesListLink onPress={handleChoosePeople(item)}>
                <SubCategoriesListText>{item.text}</SubCategoriesListText>
              </SubCategoriesListLink>
            }
          />
          <SubCategoriesLink to={{ screen: "ProposeService" }}>
            <Text>(+) Proponer Servicio</Text>
          </SubCategoriesLink>
          <SubCategoriesTerms>
            <Text>Aviso de Privacidad - Email</Text>
          </SubCategoriesTerms>
        </SubCategoriesContainer>
      </Layout>
    );
  }
}
