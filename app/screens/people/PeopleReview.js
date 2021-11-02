import React from "react";
import AppLoading from "expo-app-loading";
import { Alert } from "react-native";

// External Imports
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearAsyncStorage } from "../../common/syncStorage";
import { checkSession, getBaseApi } from "../../common/functions";

// Styled Components & Components
import Layout from "../Layout";
import Header from "../../components/Header";
import UserButton from "../../components/UserButton";
import {
  PeopleContainer,
  PeopleSubtitle,
  PeopleReviewRow,
  PeopleReviewStars,
  PeopleReviewsStar,
  PeopleReviewName,
  PeopleReviewNameText,
  PeopleReviewWrapper,
  PeopleReviewEntireText,
  PeopleReviewDate,
} from "../../styles/screens/people/People";
import { GeneralTitle } from "../../styles/GeneralStyles";
// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import StarIcon from "../../assets/start.png";

export default function PeopleReview({ route, navigation }) {
  const { name, id } = route.params;
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      checkSession(navigation);
      getReviewsByProvider();
    });
  }, []);

  const getReviewsByProvider = async () => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    fetch(getBaseApi() + "/manage/Review?user=" + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionId,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          setReviews(response.data.reviews);
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

  const renderReviews = () => {
    return reviews.map((item, index) => {
      return (
        <PeopleReviewWrapper key={"review" + index}>
          <PeopleReviewRow>
            <PeopleReviewStars>
              <PeopleReviewNameText>
                {renderStars(item.stars)}
              </PeopleReviewNameText>
            </PeopleReviewStars>
            <PeopleReviewName>
              <PeopleReviewNameText>{item.name}</PeopleReviewNameText>
            </PeopleReviewName>
          </PeopleReviewRow>
          <PeopleReviewEntireText>{item.message}</PeopleReviewEntireText>
          <PeopleReviewDate>{item.serviceDate}</PeopleReviewDate>
        </PeopleReviewWrapper>
      );
    });
  };

  const renderStars = (quantity) => {
    let stars = [];
    for (let i = 0; i < quantity; i++) {
      stars.push(<PeopleReviewsStar source={StarIcon} key={"start" + i} />);
    }
    return stars;
  };

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
        <Header>
          <UserButton />
        </Header>
        <PeopleContainer>
          <GeneralTitle>{name}</GeneralTitle>
          <PeopleSubtitle>Reseñas obtenidas</PeopleSubtitle>
          {renderReviews()}
        </PeopleContainer>
      </Layout>
    );
  }
}
