// Native imports
import React from "react";
import AppLoading from "expo-app-loading";
import { Alert } from "react-native";

// External Imports
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearAsyncStorage } from "../../common/syncStorage";
import { checkSession, getBaseApi } from "../../common/functions";

// Styled Components
import Layout from "../Layout";
import UserButton from "../../components/UserButton";
import Header from "../../components/Header";
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
  CatPeopleListCardButton
} from "../../styles/screens/categories/CategoriesPeople";

// Assets and fonts
import {
  useFonts,
  HindMadurai_700Bold,
  HindMadurai_600SemiBold
} from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import People1Icon from "../../assets/people.png";

export default function CategoriesPeople({ route, navigation }) {
  const [providers, setProviders] = React.useState([]);
  const { text, id, icon } = route.params;

  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    HindMadurai_600SemiBold,
    Roboto_400Regular,
    Roboto_700Bold
  });

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      checkSession(navigation);
      getProviders();
    });
  }, []);

  const getProviders = async () => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    let city = await AsyncStorage.getItem("city");
    if (!city) {
      city = "ALL";
    }
    fetch(getBaseApi() + "/manage/Provider?service=" + id + "&city=" + city, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionId
      }
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          setProviders(response.data);
        } else {
          if (response.error === "Error: Sesi??n Invalida") {
            clearAsyncStorage(navigation);
          } else {
            Alert.alert("Ooops :(", response.error, [
              {
                text: "Ok"
              }
            ]);
          }
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleGoToPeople = (item) => {
    navigation.navigate("People", {
      id: item.id,
      name: item.name
    });
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Layout>
        <Header>
          <UserButton navigation={navigation} />
        </Header>
        <CategoriesPeopleContainer>
          <CategoriesPeopleCard>
            <CategoriesPeopleCardImage source={{ uri: icon }} />
            <CategoriesPeopleCardContent>
              <CategoriesPeopleTitle>{text}</CategoriesPeopleTitle>
            </CategoriesPeopleCardContent>
          </CategoriesPeopleCard>
          <CategoriesPeopleText>Selecciona alguna persona</CategoriesPeopleText>
          <CategoriesPeopleList
            nestedScrollEnabled
            data={providers}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <CatPeopleListCard>
                <CatPeopleListCardImage
                  source={
                    item.profileImage ? { uri: item.profileImage } : People1Icon
                  }
                />
                <CatPeopleListCardContent>
                  <CatPeopleListCardText>{item.name}</CatPeopleListCardText>
                  <CatPeopleListCardButton
                    onPress={() => handleGoToPeople(item)}
                  >
                    <CatPeopleListCardText white>
                      Enviar Mensaje
                    </CatPeopleListCardText>
                  </CatPeopleListCardButton>
                </CatPeopleListCardContent>
              </CatPeopleListCard>
            )}
          />
        </CategoriesPeopleContainer>
      </Layout>
    );
  }
}
