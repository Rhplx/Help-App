// Native imports
import React from "react";
import { Link } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

// Third Party Imports
import { Formik } from "formik";
import * as yup from "yup";

// Styled Components
import { Text } from "react-native";
import Layout from "./Layout";
import {
  Container,
  Logo,
  Title,
  Subtitle,
  FormWrapper,
  Button,
  ButtonText,
  ButtonWrapper,
  Paragraph,
  TermsWrapper,
  TermsText,
} from "../styles/screens/LoginStyles";
import { GeneralInput } from "../styles/GeneralStyles";

// Assets and fonts
import LogoImage from "../assets/logo.png";
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function Login() {
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
      .required("Contraseña requerida"),
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
        <Container>
          <Logo source={LogoImage} />
          <Title>¡Bienvenido!</Title>
          <Subtitle>Identifícate para continuar</Subtitle>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
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
                    <Link to={{ screen: "Register" }}>
                      <ButtonText>Registrate</ButtonText>
                    </Link>
                  </Button>
                  <Button pink onPress={handleSubmit}>
                    <ButtonText>Entrar</ButtonText>
                  </Button>
                </ButtonWrapper>
                <Paragraph>
                  En Help puedes buscar y ofrecer servíos directamente con quien
                  lo ofrece o necesita, haciendo contacto directo. Registrate
                  para comenzar.
                </Paragraph>
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
