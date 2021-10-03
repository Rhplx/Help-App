// Native imports
import React from "react";
import AppLoading from "expo-app-loading";
import { Text } from "react-native";

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
  ProposeContent,
  ProposeTerms
} from "../../styles/screens/categories/ProposeService";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { FormWrapper, GeneralInput, GeneralSubtitle, GeneralTitle } from "../../styles/GeneralStyles";

export default function ProposeService() {

  const proposeValidationSchema = yup.object().shape({
    profesion: yup
      .string()
      .required("Profesión requerida"),
    description: yup
      .string()
      .required("Descripción requerida"),
    comments: yup
      .string()
      .required("Comentarios requerida"),
  });

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
        <ProposeContainer>
          <ProposeContent>
            <GeneralTitle>Proponer Servicio</GeneralTitle>
            <GeneralSubtitle>Si no encuentras tu área o servicio</GeneralSubtitle>
            <Formik
              validationSchema={proposeValidationSchema}
              initialValues={{ profesion: "", description: "", comments: "" }}
              onSubmit={(values) => console.log(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
              }) => (
                <>
                  <FormWrapper>
                    <GeneralInput
                      onChangeText={handleChange("profesion")}
                      onBlur={handleBlur("profesion")}
                      placeholder="Servicio o Profesión"
                      name="profesion"
                      value={values.profesion}
                    />
                    {errors.profesion && (
                      <Text style={{ fontSize: 10, color: "red" }}>
                        {errors.profesion}
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
          </ProposeContent>
          <ProposeTerms>
            <Text>Aviso de Privacidad - Email</Text>
          </ProposeTerms>
        </ProposeContainer>
      </Layout>
    );
  }
}
