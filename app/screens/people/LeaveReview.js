import React from "react";
import AppLoading from "expo-app-loading";
import { Text, Alert, StyleSheet } from "react-native";

// External Imports
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearAsyncStorage } from "../../common/syncStorage";
import { checkSession, dateFormat, getBaseApi } from "../../common/functions";

// Third Party Imports
import { Formik } from "formik";
import * as yup from "yup";
import RNPickerSelect from "react-native-picker-select";

// Styled Components & Components
import Layout from "../Layout";
import Header from "../../components/Header";
import UserButton from "../../components/UserButton";
import {
  PeopleContainer,
  PeopleSubtitle,
  LeaveReview,
  LeaveStarsWrapper,
  PeopleReviewsStar,
  PeopleReviewsStars,
} from "../../styles/screens/people/People";
import {
  GeneralTitle,
  GeneralInput,
  RegisterButton,
  RegisterButtonText,
} from "../../styles/GeneralStyles";
// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import StarIcon from "../../assets/start.png";

export default function PeopleReview({ route, navigation }) {
  const { name, id } = route.params;
  const [stars, setStars] = React.useState(undefined);

  const validationSchema = yup.object().shape({
    message: yup.string().required("Mensaje requerido"),
  });

  const renderStars = () => {
    let star = [];
    for (let i = 0; i < stars; i++) {
      star.push(<PeopleReviewsStar source={StarIcon} key={"start" + i} />);
    }
    return star;
  };

  const insertReview = async (values, actions) => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    values["userTo"] = id;
    values["serviceDate"] = dateFormat(2, new Date());
    values["stars"] = stars;
    fetch(getBaseApi() + "/manage/Review", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + sessionId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          navigation.goBack();
          Alert.alert("Éxito", "Tu reseña ha sido publicada");
          actions.resetForm({ message: "" });
          setStars("");
        } else {
          if (response.error === "Error: Sesión Invalida") {
            clearAsyncStorage(navigation);
          } else {
            Alert.alert("Ooops :(", response.error);
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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Layout>
        <Header>
          <UserButton navigation={navigation} />
        </Header>
        <PeopleContainer>
          <GeneralTitle>Deja una reseña a {name}</GeneralTitle>
          <PeopleSubtitle>Escribe o edita una Reseña (pública)</PeopleSubtitle>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ message: "" }}
            onSubmit={insertReview}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <LeaveReview>
                <LeaveStarsWrapper>
                  <RNPickerSelect
                    onValueChange={(value) => setStars(value)}
                    placeholder={{
                      label: "Stars",
                      value: "",
                    }}
                    value={stars}
                    useNativeAndroidPickerStyle={false}
                    style={ReviewSelectStyles}
                    items={[
                      {
                        label: "1",
                        value: "1",
                      },
                      {
                        label: "2",
                        value: "2",
                      },
                      {
                        label: "3",
                        value: "3",
                      },
                      {
                        label: "4",
                        value: "4",
                      },
                      {
                        label: "5",
                        value: "5",
                      },
                    ]}
                  />
                  <PeopleReviewsStars width="100%">
                    {renderStars()}
                  </PeopleReviewsStars>
                </LeaveStarsWrapper>
                {!stars && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    Estrellas requeridas
                  </Text>
                )}
                <GeneralInput
                  multiline
                  numberOfLines={4}
                  onChangeText={handleChange("message")}
                  onBlur={handleBlur("message")}
                  placeholder="Reseña"
                  name="message"
                  value={values.message}
                  style={{ height: 200, textAlignVertical: "top" }}
                />
                {errors.message && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.message}
                  </Text>
                )}
                <RegisterButton onPress={(e) => stars && handleSubmit(e)}>
                  <RegisterButtonText>Guardar reseña</RegisterButtonText>
                </RegisterButton>
              </LeaveReview>
            )}
          </Formik>
        </PeopleContainer>
      </Layout>
    );
  }
}
const ReviewSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: "#245751",
    color: "#FFFFFF",
    fontSize: 18,
    padding: 8,
    borderRadius: 10,
    textAlign: "center",
  },
  inputAndroid: {
    width: "100%",
    padding: 8,
    backgroundColor: "#245751",
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 21,
    borderRadius: 10,
    textAlign: "center",
  },
});
