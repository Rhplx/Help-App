import React from "react";
import { Text } from "react-native";
import Layout from "./Layout";
import { Link } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Container,
  Logo,
  Title,
  Subtitle,
  FormWrapper,
  Input,
  Button,
  ButtonText,
  ButtonWrapper,
  Paragraph,
  TermsWrapper,
  TermsText,
} from "../styles/LoginStyles";
import AppLoading from "expo-app-loading";
import LogoImage from "../assets/logo.png";
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function App() {
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
                  <Input
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    placeholder="Correo"
                    name="email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {errors.email && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.email}
                    </Text>
                  )}
                  <Input
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
