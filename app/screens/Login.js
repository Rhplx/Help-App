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
  ButtonForgot,
  ButtonWrapper,
  Paragraph,
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
          <Title>¡Bienvenido!</Title>
          <Subtitle>Identifícate para continuar</Subtitle>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
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
                  <GeneralInput
                    name="password"
                    placeholder="Contraseña"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                  />
                  {errors.password && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.password}
                    </Text>
                  )}
                </FormWrapper>
                <ButtonWrapper>
                  <Button>
                    <ButtonLink to={{ screen: "LoginPlans" }}>
                      <ButtonText>Registrate</ButtonText>
                    </ButtonLink>
                  </Button>
                  <Button pink onPress={handleSubmit}>
                    <ButtonText>Entrar</ButtonText>
                  </Button>
                </ButtonWrapper>
                <ButtonLink
                  to={{ screen: "Forgot" }}
                  // onPress={() => props.navigation.navigate("Forgot")}
                >
                  <ButtonForgot>Olvide mi contraseña</ButtonForgot>
                </ButtonLink>
                <Paragraph>
                  En Help puedes buscar y ofrecer servicios directamente con
                  quien lo ofrece o necesita, haciendo contacto directo.
                  Registrate para comenzar.
                </Paragraph>
                <TermsWrapper>
                  <TermsText to={{ screen: "Privacity" }}>
                    Aviso de Privacidad
                  </TermsText>
                </TermsWrapper>
              </>
            )}
          </Formik>
        </Container>
      </Layout>
    );
  }
}
