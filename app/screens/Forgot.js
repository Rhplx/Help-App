// Native imports
import React from "react";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Third Party Imports
import { Formik } from "formik";
import * as yup from "yup";

// Styled Components
import { Text, Alert } from "react-native";
import Layout from "./Layout";
import {
  Container,
  Logo,
  Title,
  Subtitle,
  FormWrapper,
  Button,
  ButtonLink,
  ButtonText,
  ButtonWrapper,
  TermsWrapper,
  TermsText
} from "../styles/screens/LoginStyles";
import { GeneralInput } from "../styles/GeneralStyles";

// Assets and fonts
import LogoImage from "../assets/logo.png";
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { getBaseApi } from "../common/functions";

export default function Login(props) {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Ingresa un correo valido")
      .required("Correo requerido"),
    password: yup
      .string()
      .min(
        8,
        ({ min }) => `La contraseña debe tener al menos ${min} caracteres`
      )
      .max(
        16,
        ({ max }) => `La contraseña debe tener al menos ${max} caracteres`
      )
      .required("Contraseña requerida")
  });
  React.useEffect(() => {
    props.navigation.addListener("focus", () => {
      checkSession();
    });
  }, []);

  const checkSession = async () => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    if (sessionId) {
      props.navigation.navigate("Categories");
    }
  };

  const getLogin = (data) => {
    fetch(
      getBaseApi() +
        "/get/Login?user=" +
        data.email +
        "&password=" +
        encodeURIComponent(data.password),
      {
        method: "GET"
      }
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          Object.keys(response.data).map((item) => {
            if (response.data[item]) {
              AsyncStorage.setItem(item, response.data[item]);
            }
          });
          props.navigation.navigate("Categories");
        } else {
          Alert.alert("Ooops :(", response.error, [
            {
              text: "Ok"
            }
          ]);
        }
      })
      .catch((error) => console.log("error", error));
  };

  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Layout>
        <Container>
          <Logo source={LogoImage} />
          <Subtitle>Ingresa tu correo para recuperar tu contraseña</Subtitle>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "" }}
            onSubmit={getLogin}
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
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    placeholder="Correo"
                    name="email"
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {errors.email && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.email}
                    </Text>
                  )}
                </FormWrapper>
                <ButtonWrapper>
                  <Button>
                    <ButtonLink to={{ screen: "Login" }}>
                      <ButtonText>Regresar</ButtonText>
                    </ButtonLink>
                  </Button>
                  <Button pink onPress={handleSubmit}>
                    <ButtonText>Recuperar</ButtonText>
                  </Button>
                </ButtonWrapper>

                <TermsWrapper>
                  <TermsText>Aviso de Privacidad</TermsText>
                </TermsWrapper>
              </>
            )}
          </Formik>
        </Container>
      </Layout>
    );
  }
}
