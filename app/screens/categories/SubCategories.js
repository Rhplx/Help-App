// Native imports
import React from "react";
import AppLoading from "expo-app-loading";
import { Text } from "react-native";

// External Imports
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearAsyncStorage } from "../../common/syncStorage";
import { checkSession, getBaseApi } from "../../common/functions";

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
  SubCategoriesLink,
} from "../../styles/screens/categories/SubCategories";
import Terms from "../../components/Terms";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function SubCategories({ route, navigation }) {
  const [subcategories, setSubcategories] = React.useState([]);
  const { text, id, icon } = route.params;

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      checkSession(navigation);
      getSubcategories();
    });
  }, []);

  const getSubcategories = async () => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    fetch(getBaseApi() + "/manage/Subservice?service=" + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionId,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          setSubcategories(response.data);
        } else {
          if (response.error === "Error: Sesión Invalida") {
            clearAsyncStorage(navigation);
          } else {
            Alert.alert("Ooops :(", response.error, [
              {
                text: "Ok",
              },
            ]);
          }
        }
      })
      .catch((error) => console.log("error", error));
  };

  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const handleChoosePeople = (item) => () => {
    navigation.navigate("CategoriesPeople", {
      id: item.id,
      text: item.name,
      icon: item.icon,
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
            <SubCatCardImage source={{ uri: icon }} />
            <SubCatCardContent>
              <SubCategoriesTitle>{text}</SubCategoriesTitle>
            </SubCatCardContent>
          </SubCatCard>
          <SubCategoriesText>
            Selecciona el servicio que necesitas
          </SubCategoriesText>
          <SubCategoriesList
            data={subcategories}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <SubCategoriesListLink onPress={handleChoosePeople(item)}>
                <SubCategoriesListText>{item.name}</SubCategoriesListText>
              </SubCategoriesListLink>
            )}
          />
          {/* <SubCategoriesLink to={{ screen: "ProposeService" }}>
            <Text>(+) Proponer Servicio</Text>
          </SubCategoriesLink> */}
        </SubCategoriesContainer>
      </Layout>
    );
  }
}
