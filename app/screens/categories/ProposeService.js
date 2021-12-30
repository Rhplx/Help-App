// Native imports
import React from "react";
import AppLoading from "expo-app-loading";
import { Text, Alert } from "react-native";

// External Imports
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearAsyncStorage } from "../../common/syncStorage";
import { getBaseApi } from "../../common/functions";

// Third Party Imports
import { Formik } from "formik";
import * as yup from "yup";

// Styled Components
import Layout from "../Layout";
import UserButton from "../../components/UserButton";
import Header from "../../components/Header";
import {
  ProposeButton,
  ProposeButtonText,
  ProposeContainer,
  ProposeContent
} from "../../styles/screens/categories/ProposeService";
import Terms from "../../components/Terms";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import {
  FormWrapper,
  GeneralInput,
  GeneralSubtitle,
  GeneralTitle
} from "../../styles/GeneralStyles";

export default function ProposeService({ navigation }) {
  const proposeValidationSchema = yup.object().shape({
    title: yup.string().required("Profesión requerida"),
    description: yup.string().required("Descripción requerida"),
    comments: yup.string().required("Comentarios requerida")
  });

  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  });

  const sendPropose = async (values, actions) => {
    console.log(values);
    let sessionId = await AsyncStorage.getItem("sessionId");
    fetch(getBaseApi() + "/manage/Service", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + sessionId,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          Alert.alert("Éxito", "Tu mensaje ha sido enviado");
          actions.resetForm();
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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Layout>
        <Header>
          <UserButton navigation={navigation} />
        </Header>
        <ProposeContainer>
          <GeneralTitle>Proponer Servicio</GeneralTitle>
          <GeneralSubtitle>Si no encuentras tu área o servicio</GeneralSubtitle>
          <Formik
            validationSchema={proposeValidationSchema}
            initialValues={{ title: "", description: "", comments: "" }}
            onSubmit={sendPropose}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid
            }) => (
              <>
                <FormWrapper>
                  <GeneralInput
                    onChangeText={handleChange("title")}
                    onBlur={handleBlur("title")}
                    placeholder="Servicio o Profesión"
                    name="title"
                    value={values.title}
                  />
                  {errors.title && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.title}
                    </Text>
                  )}
                  <GeneralInput
                    name="description"
                    multiline
                    numberOfLines={4}
                    placeholder="Descripción"
                    onChangeText={handleChange("description")}
                    onBlur={handleBlur("description")}
                    value={values.description}
                  />
                  {errors.description && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.description}
                    </Text>
                  )}
                  <GeneralInput
                    name="comments"
                    multiline
                    numberOfLines={4}
                    placeholder="Comentarios"
                    onChangeText={handleChange("comments")}
                    onBlur={handleBlur("comments")}
                    value={values.comments}
                  />
                  {errors.comments && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.comments}
                    </Text>
                  )}
                </FormWrapper>
                <ProposeButton onPress={handleSubmit}>
                  <ProposeButtonText>Enviar</ProposeButtonText>
                </ProposeButton>
              </>
            )}
          </Formik>
        </ProposeContainer>
      </Layout>
    );
  }
}
