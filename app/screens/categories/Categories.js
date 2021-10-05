// Native imports
import React from "react";
import AppLoading from "expo-app-loading";

import { Text, StyleSheet } from "react-native";


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
import HelperIcon from "../../assets/ayudante.png";

// External Imports
import { checkSession, getBaseApi } from "../../common/functions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearAsyncStorage } from "../../common/syncStorage";
import RNPickerSelect from "react-native-picker-select";

const greenSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: "#39B4BB",
    color: "white",
    fontSize: 18,
    paddingVertical: 4,
    paddingHorizontal: 18,
    borderWidth: 0.5,
    borderColor: "#39B4BB",
    borderRadius: 10,
    minHeight: 50,
    marginTop: 10,
    paddingRight: 30, // to ensure the text is never behind the icon
    textAlign: "center",
  },
  inputAndroid: {
    backgroundColor: "#39B4BB",
    color: "white",
    fontSize: 18,
    paddingVertical: 4,
    paddingHorizontal: 18,
    borderWidth: 0.5,
    borderColor: "#39B4BB",
    borderRadius: 10,
    minHeight: 50,
    marginTop: 10,
    paddingRight: 30, // to ensure the text is never behind the icon
    textAlign: "center",
  },
});

export default function Categories({ navigation }) {

  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      checkSession();
      getCategories();
    });
    navigation.addListener("blur", () => unmount());
  }, []);

  const unmount = function () {
    setCategories([]);
  };

  const getCategories = async () => {
    sessionId = await AsyncStorage.getItem("sessionId");
    fetch(getBaseApi() + "/manage/Service", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + sessionId
      }
    })
      .then(res => res.json())
      .then(response => {
        if (response.result) {
          setCategories(response.data);
        } else {
          if (response.error === "Error: Sesión Invalida") {
            clearAsyncStorage(navigation);
          }
          else {
            Alert.alert("Ooops :(", response.error, [
              {
                text: "Ok",
              },
            ]);
          }
        }
      })
      .catch(error => console.log('error', error));
  };

  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const handleChooseCategory = (subCategory) => () => {
    navigation.navigate("SubCategories", {
      id: subCategory.id,
      text: subCategory.name,
      icon: HelperIcon //item.icon
    });
  }

  const handleChangeCity = (value) => {
    AsyncStorage.setItem(value);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Layout>
        <Header signout>
          <UserButton navigation={navigation} />
        </Header>
        <CategoriesContainer>
          <CategoriesTitle>Busca un Servicio</CategoriesTitle>
          <CategoriesSubtitle>Selecciona una categoría de servicios</CategoriesSubtitle>
          <CategoriesList
            data={categories}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({ item }) =>
              <CategoriesCard onPress={handleChooseCategory(item)}>
                <CategoriesCardContent>
                  {/* <CategoriesCardImage source={item.icon} /> */}
                  <CategoriesCardImage source={HelperIcon} />
                  <CategoriesCardText>{item.name}</CategoriesCardText>
                </CategoriesCardContent>
              </CategoriesCard>
            }
          />
          <CategoriesActions>
            <CategoriesButtonLink to={{ screen: "ProposeService" }}>
              <CategoriesButtonText>Proponer Servicio</CategoriesButtonText>
            </CategoriesButtonLink>
            <RNPickerSelect
              onValueChange={handleChangeCity}
              placeholder={{
                label: "Cambiar Ciudad",
                value: null,
              }}
              // style={{
              //   ...greenSelectStyles,
              //   iconContainer: {
              //     top: 5,
              //     right: 12,
              //     resizeMode: "contain",
              //   },
              // }}
              items={[
                {
                  "label": "Aguascalientes",
                  "value": "Aguascalientes",
                },
                {
                  "label": "Ensenada",
                  "value": "Ensenada",
                },
                {
                  "label": "Mexicali",
                  "value": "Mexicali",
                },
                {
                  "label": "Tijuana",
                  "value": "Tijuana",
                },
                {
                  "label": "La Paz",
                  "value": "La Paz",
                },
                {
                  "label": "Los Cabos",
                  "value": "Los Cabos",
                },
                {
                  "label": "Campeche",
                  "value": "Campeche",
                },
                {
                  "label": "Ciudad del Carmen",
                  "value": "Ciudad del Carmen",
                },
                {
                  "label": "Saltillo",
                  "value": "Saltillo",
                },
                {
                  "label": "Monclova-Frontera",
                  "value": "Monclova-Frontera",
                },
                {
                  "label": "La Laguna",
                  "value": "La Laguna",
                },
                {
                  "label": "Piedras Negras",
                  "value": "Piedras Negras",
                },
                {
                  "label": "Tecomán",
                  "value": "Tecomán",
                },
                {
                  "label": "Colima-Villa de Álvarez",
                  "value": "Colima-Villa de Álvarez",
                },
                {
                  "label": "Manzanillo",
                  "value": "Manzanillo",
                },
                {
                  "label": "Tuxtla Gutiérrez",
                  "value": "Tuxtla Gutiérrez",
                },
                {
                  "label": "Tapachula",
                  "value": "Tapachula",
                },
                {
                  "label": "Chihuahua",
                  "value": "Chihuahua",
                },
                {
                  "label": "Juárez",
                  "value": "Juárez",
                },
                {
                  "label": "Valle de México",
                  "value": "Valle de México",
                },
                {
                  "label": "Durango",
                  "value": "Durango",
                },
                {
                  "label": "Celaya",
                  "value": "Celaya",
                },
                {
                  "label": "Guanajuato",
                  "value": "Guanajuato",
                },
                {
                  "label": "Irapuato",
                  "value": "Irapuato",
                },
                {
                  "label": "León",
                  "value": "León",
                },
                {
                  "label": "La Piedad-Pénjamo",
                  "value": "La Piedad-Pénjamo",
                },
                {
                  "label": "San Francisco del Rincón",
                  "value": "San Francisco del Rincón",
                },
                {
                  "label": "Salamanca",
                  "value": "Salamanca",
                },
                {
                  "label": "Acapulco",
                  "value": "Acapulco",
                },
                {
                  "label": "Chilpancingo",
                  "value": "Chilpancingo",
                },
                {
                  "label": "Tula",
                  "value": "Tula",
                },
                {
                  "label": "Tulancingo",
                  "value": "Tulancingo",
                },
                {
                  "label": "Pachuca",
                  "value": "Pachuca",
                },
                {
                  "label": "Guadalajara",
                  "value": "Guadalajara",
                },
                {
                  "label": "Ocotlán",
                  "value": "Ocotlán",
                },
                {
                  "label": "Puerto Vallarta",
                  "value": "Puerto Vallarta",
                },
                {
                  "label": "Toluca",
                  "value": "Toluca",
                },
                {
                  "label": "Zamora-Jacona",
                  "value": "Zamora-Jacona",
                },
                {
                  "label": "Morelia",
                  "value": "Morelia",
                },
                {
                  "label": "Uruapan",
                  "value": "Uruapan",
                },
                {
                  "label": "Cuautla",
                  "value": "Cuautla",
                },
                {
                  "label": "Cuernavaca",
                  "value": "Cuernavaca",
                },
                {
                  "label": "Tepic",
                  "value": "Tepic",
                },
                {
                  "label": "Monterrey",
                  "value": "Monterrey",
                },
                {
                  "label": "Oaxaca",
                  "value": "Oaxaca",
                },
                {
                  "label": "Tehuantepec-Salina Cruz",
                  "value": "Tehuantepec-Salina Cruz",
                },
                {
                  "label": "Puebla-Tlaxcala",
                  "value": "Puebla-Tlaxcala",
                },
                {
                  "label": "Tehuacán",
                  "value": "Tehuacán",
                },
                {
                  "label": "Querétaro",
                  "value": "Querétaro",
                },
                {
                  "label": "San Juan del Río",
                  "value": "San Juan del Río",
                },
                {
                  "label": "Cancún",
                  "value": "Cancún",
                },
                {
                  "label": "Chetumal",
                  "value": "Chetumal",
                },
                {
                  "label": "Ciudad Valles",
                  "value": "Ciudad Valles",
                },
                {
                  "label": "Rioverde",
                  "value": "Rioverde",
                },
                {
                  "label": "San Luis Potosí",
                  "value": "San Luis Potosí",
                },
                {
                  "label": "Soledad",
                  "value": "Soledad",
                },
                {
                  "label": "Los Mochis",
                  "value": "Los Mochis",
                },
                {
                  "label": "Culiacán",
                  "value": "Culiacán",
                },
                {
                  "label": "Mazatlán",
                  "value": "Mazatlán",
                },
                {
                  "label": "Ciudad Obregón",
                  "value": "Ciudad Obregón",
                },
                {
                  "label": "Guaymas",
                  "value": "Guaymas",
                },
                {
                  "label": "Hermosillo",
                  "value": "Hermosillo",
                },
                {
                  "label": "Cárdenas",
                  "value": "Cárdenas",
                },
                {
                  "label": "Villahermosa",
                  "value": "Villahermosa",
                },
                {
                  "label": "Tampico-Pánuco",
                  "value": "Tampico-Pánuco",
                },
                {
                  "label": "Matamoros",
                  "value": "Matamoros",
                },
                {
                  "label": "Nuevo Laredo",
                  "value": "Nuevo Laredo",
                },
                {
                  "label": "Reynosa-Río Bravo",
                  "value": "Reynosa-Río Bravo",
                },
                {
                  "label": "Ciudad Victoria",
                  "value": "Ciudad Victoria",
                },
                {
                  "label": "Tlaxcala-Apizaco",
                  "value": "Tlaxcala-Apizaco",
                },
                {
                  "label": "Veracruz",
                  "value": "Veracruz",
                },
                {
                  "label": "Córdoba",
                  "value": "Córdoba",
                },
                {
                  "label": "Orizaba",
                  "value": "Orizaba",
                },
                {
                  "label": "Xalapa",
                  "value": "Xalapa",
                },
                {
                  "label": "Poza Rica",
                  "value": "Poza Rica",
                },
                {
                  "label": "Coatzacoalcos",
                  "value": "Coatzacoalcos",
                },
                {
                  "label": "Minatitlán",
                  "value": "Minatitlán",
                },
                {
                  "label": "Mérida",
                  "value": "Mérida",
                },
                {
                  "label": "Zacatecas-Guadalupe",
                  "value": "Zacatecas-Guadalupe",
                }
              ]}
            />
          </CategoriesActions>
          <Terms />
        </CategoriesContainer>
      </Layout>
    );
  }
}
