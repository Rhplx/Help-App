// Native imports
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { StyleSheet } from "react-native";

// Third Party Imports
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
// import { Picker } from '@react-native-picker/picker';

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
  CategoriesActions,
  CategoriesButtonText,
} from "../../styles/screens/categories/Categories";
import Terms from "../../components/Terms";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import CheftIcon from "../../assets/chef.png";
import HelperIcon from "../../assets/ayudante.png";

export default function Categories({ navigation }) {
  const [selectedCountry, setSelectedCountry] = useState("MX");

  const placeholder = {
    label: "Cambiar ciudad",
    value: null
  };

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
            {/* <Picker
              selectedValue={selectedCountry}
              onValueChange={(itemValue, itemIndex) =>
                selectedCountry(itemValue)
              }
              style={greenSelectStyles}
            >
              <Picker.Item label="Cambiar ciudad" value="default" />
              <Picker.Item label="México" value="MX" />
              <Picker.Item label="Estados Unidos" value="USA" />
            </Picker> */}
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              placeholder={placeholder}
              useNativeAndroidPickerStyle={false}
              style={greenSelectStyles}
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" },
              ]}
            />
          </CategoriesActions>
          <Terms />
        </CategoriesContainer>
      </Layout>
    );
  }
}

const greenSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: "#39B4BB",
    color: "#FFFFFF",
    fontSize: 18,
    padding: 8,
    borderRadius: 10,
    textAlign: "center",
  },
  inputAndroid: {
    width: "100%",
    padding: 8,
    backgroundColor: "#39B4BB",
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 21,
    borderRadius: 10,
    textAlign: "center",
  },
});