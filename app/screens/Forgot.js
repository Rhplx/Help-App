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
  TermsText,
} from "../styles/screens/LoginStyles";
import { GeneralInput } from "../styles/GeneralStyles";

// Assets and fonts
import LogoImage from "../assets/logo.png";
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { getBaseApi } from "../common/functions";

export default function Forgot(props) {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Ingresa un correo valido")
      .required("Correo requerido"),
  });
  React.useEffect(() => {
    props.navigation.addListener("focus", () => {
      checkSession();
    });
  }, []);

  const checkSession = async () => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    if (sessionId) {
      // props.navigation.navigate("Categories");
    }
  };

  const forgotPassword = (data) => {
    console.log(data);
    fetch(getBaseApi() + "/manage/Password?email=" + data.email, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          console.log(response);
          Alert.alert("Hecho", "Hemos enviado un correo con tu contraseña");
          props.navigation.navigate("Login");
        } else {
          console.log(response);
          Alert.alert("Ooops :(", response.error);
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
        <Container>
          <Logo source={LogoImage} />
          <Subtitle>Ingresa tu correo para recuperar tu contraseña</Subtitle>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "" }}
            onSubmit={forgotPassword}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
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
                    <ButtonLink
                      to={{ screen: "Login" }}
                      // onPress={() => props.navigation.navigate("Login")}
                    >
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
