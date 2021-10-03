// Native imports
import React from "react";
import AppLoading from "expo-app-loading";
import { Text } from "react-native";

// Styled Components
import Layout from "../Layout";
import UserButton from "../../components/UserButton";
import Header from "../../components/Header";
import {
  CategoriesContainer,
  CategoriesTitle,
  CategoriesSubtitle,
  CategoriesList,
  CategoriesCard,
  CategoriesCardContent,
  CategoriesCardImage,
  CategoriesCardText,
  CategoriesButton,
  CategoriesButtonLink,
  CategoriesTerms,
  CategoriesActions,
  CategoriesButtonText,
} from "../../styles/screens/categories/Categories";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import CheftIcon from "../../assets/chef.png";
import HelperIcon from "../../assets/ayudante.png";

export default function Categories({ navigation }) {

  const MockDataservices = [
    {
      src: CheftIcon,
      text: "Ayudantes personales"
    },
    {
      src: HelperIcon,
      text: "Personal de salud y belleza a domicilio"
    },
    {
      src: CheftIcon,
      text: "Ayudantes personales 1"
    },
    {
      src: HelperIcon,
      text: "Personal de salud y belleza a domicilio 1"
    },
    {
      src: CheftIcon,
      text: "Ayudantes personales 2"
    },
    {
      src: HelperIcon,
      text: "Personal de salud y belleza a domicilio 2"
    },
    {
      src: CheftIcon,
      text: "Ayudantes personales 3"
    },
    {
      src: HelperIcon,
      text: "Personal de salud y belleza a domicilio 3"
    }
  ];
  
  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const handleChooseCategory = (subCategory) => () => {
    navigation.navigate("SubCategories", {
      id: 0,
      text: subCategory.text
    });
  }

  const handleChangeCity = () => {
    console.log("Change city");
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Layout>
        <Header signout>
          <UserButton />
        </Header>
        <CategoriesContainer>
          <CategoriesTitle>Busca un Servicio</CategoriesTitle>
          <CategoriesSubtitle>Selecciona una categoría de servicios</CategoriesSubtitle>
          <CategoriesList
            data={MockDataservices}
            keyExtractor={item => item.text}
            numColumns={2}
            renderItem={({ item }) => 
              <CategoriesCard onPress={handleChooseCategory(item)}>
                <CategoriesCardContent>
                  <CategoriesCardImage source={item.src} />
                  <CategoriesCardText>{item.text}</CategoriesCardText>
                </CategoriesCardContent>
              </CategoriesCard>
            }
          />
          <CategoriesActions>
            <CategoriesButtonLink to={{ screen: "ProposeService" }}>
              <CategoriesButtonText>Proponer Servicio</CategoriesButtonText>
            </CategoriesButtonLink>
            <CategoriesButton onPress={handleChangeCity}>
              <CategoriesButtonText>Cambiar Ciudad</CategoriesButtonText>
            </CategoriesButton>
          </CategoriesActions>
          <CategoriesTerms>
            <Text>Aviso de Privacidad - Email</Text>
          </CategoriesTerms>
        </CategoriesContainer>
      </Layout>
    );
  }
}
