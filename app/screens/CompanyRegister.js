// Native imports
import React, { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import { StyleSheet } from "react-native";

// Third Party Imports
import { Formik } from "formik";
import * as yup from "yup";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";

// Styled Components
import { Text, Platform, View } from "react-native";
import Layout from "./Layout";
import Header from "../components/Header";
import PaypalPlan from "../components/PaypalPlan";

import {
  GeneralWrapper,
  GeneralTitle,
  GeneralSubtitle,
  FormWrapper,
  GeneralInput,
  DoubleInputWrapper,
  GeneralImagePicker,
  GeneralImagePickerText,
  FreeAdviceText,
  TermsRow,
  TermsRowText,
  TermsRowCheckbox,
  RegisterButton,
  RegisterButtonText,
} from "../styles/GeneralStyles";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function CompanyRegister() {
  const [image, setImage] = useState(null);

  const registerValidationSchema = yup.object().shape({
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
    phone: yup
      .number()
      .typeError("Solo numeros")
      .required("Telefono y WhatsApp requerido"),
    whatsApp: yup
      .number()
      .typeError("Solo numeros")
      .required("WhatsApp requerido"),
  });
  const whiteSelectStyles = StyleSheet.create({
    inputIOS: {
      backgroundColor: "white",
      fontSize: 18,
      paddingVertical: 4,
      paddingHorizontal: 18,
      borderWidth: 0.5,
      borderColor: "white",
      borderRadius: 10,
      minHeight: 50,
      marginTop: 10,
      paddingRight: 30, // to ensure the text is never behind the icon
      textAlign: "center",
    },
    inputAndroid: {
      backgroundColor: "white",
      fontSize: 18,
      paddingVertical: 4,
      paddingHorizontal: 18,
      borderWidth: 0.5,
      borderColor: "white",
      borderRadius: 10,
      minHeight: 50,
      marginTop: 10,
      paddingRight: 30, // to ensure the text is never behind the icon
      textAlign: "center",
    },
  });
  const greenSelectStyles = StyleSheet.create({
    inputIOS: {
      backgroundColor: "#39B4BB",
      color: "white",
      fontSize: 18,
      paddingVertical: 4,
      paddingHorizontal: 18,
      borderWidth: 0.5,
      borderColor: "#39B4BB",
      borderRadius: 10,
      minHeight: 50,
      marginTop: 10,
      paddingRight: 30, // to ensure the text is never behind the icon
      textAlign: "center",
    },
    inputAndroid: {
      backgroundColor: "#39B4BB",
      color: "white",
      fontSize: 18,
      paddingVertical: 4,
      paddingHorizontal: 18,
      borderWidth: 0.5,
      borderColor: "#39B4BB",
      borderRadius: 10,
      minHeight: 50,
      marginTop: 10,
      paddingRight: 30, // to ensure the text is never behind the icon
      textAlign: "center",
    },
  });
  const statePlaceholder = {
    label: "Estado",
    value: null,
  };
  const cityPlaceholder = {
    label: "Ciudad",
    value: null,
  };
  const servicePlaceholder = {
    label: "Selecciona servicio",
    value: null,
    color: "#ffffff",
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
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
        <Header />
        <GeneralWrapper>
          <GeneralTitle>Registro para empresas</GeneralTitle>
          <GeneralSubtitle>
            Registra tu empresa para ofrecer servicios
          </GeneralSubtitle>
          <FormWrapper>
            <Formik
              validationSchema={registerValidationSchema}
              initialValues={{
                email: "",
                password: "",
                phone: "",
                whatsApp: "",
              }}
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
                  <GeneralInput placeholder="Nombre completo" />
                  <GeneralInput placeholder="Puesto" />
                  <GeneralInput
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
                  <DoubleInputWrapper>
                    <GeneralInput
                      double
                      onChangeText={handleChange("whatsApp")}
                      onBlur={handleBlur("whatsApp")}
                      placeholder="WhatsApp"
                      name="whatsApp"
                      value={values.whatsApp}
                      keyboardType="number-pad"
                      maxLength={10}
                    />
                    <GeneralInput
                      double
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      placeholder="Phone"
                      name="phone"
                      value={values.phone}
                      keyboardType="number-pad"
                      maxLength={10}
                    />
                  </DoubleInputWrapper>
                  {errors.phone && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.phone}
                    </Text>
                  )}
                  <DoubleInputWrapper>
                    <GeneralInput
                      double
                      name="password"
                      placeholder="Contraseña"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry
                    />
                    <GeneralInput
                      double
                      name="password"
                      placeholder="Repetir Contraseña"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry
                    />
                  </DoubleInputWrapper>
                  {errors.password && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.password}
                    </Text>
                  )}
                  <GeneralSubtitle marginTop>
                    Ingresa los datos de la empresa
                  </GeneralSubtitle>
                  <GeneralInput placeholder="Nombre comercial de la empresa" />
                  <GeneralInput placeholder="Razón social" />
                  <GeneralInput placeholder="RFC" maxLength={13} />
                  <GeneralInput placeholder="Calle y numero" />
                  <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    placeholder={statePlaceholder}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      ...whiteSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain",
                      },
                    }}
                    items={[
                      { label: "Football", value: "football" },
                      { label: "Baseball", value: "baseball" },
                      { label: "Hockey", value: "hockey" },
                    ]}
                  />
                  <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    placeholder={cityPlaceholder}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      ...whiteSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain",
                      },
                    }}
                    items={[
                      { label: "Football", value: "football" },
                      { label: "Baseball", value: "baseball" },
                      { label: "Hockey", value: "hockey" },
                    ]}
                  />
                  <GeneralSubtitle marginTop>
                    Selecciona hasta tres servicios que deseas ofrecer
                  </GeneralSubtitle>
                  <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    placeholder={servicePlaceholder}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      ...greenSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain",
                      },
                    }}
                    items={[
                      { label: "Football", value: "football" },
                      { label: "Baseball", value: "baseball" },
                      { label: "Hockey", value: "hockey" },
                    ]}
                  />
                  <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    placeholder={servicePlaceholder}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      ...greenSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain",
                      },
                    }}
                    items={[
                      { label: "Football", value: "football" },
                      { label: "Baseball", value: "baseball" },
                      { label: "Hockey", value: "hockey" },
                    ]}
                  />
                  <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    placeholder={servicePlaceholder}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      ...greenSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain",
                      },
                    }}
                    items={[
                      { label: "Football", value: "football" },
                      { label: "Baseball", value: "baseball" },
                      { label: "Hockey", value: "hockey" },
                    ]}
                  />
                  <GeneralImagePicker>
                    <GeneralImagePickerText
                      title="Carga identificación"
                      onPress={pickImage}
                      color="white"
                    />
                  </GeneralImagePicker>
                  <GeneralImagePicker>
                    <GeneralImagePickerText
                      title="Carga logotipo"
                      onPress={pickImage}
                      color="white"
                    />
                  </GeneralImagePicker>
                  <GeneralInput
                    multiline={true}
                    numberOfLines={10}
                    placeholder="Presentación de la empresa"
                  />
                  <FreeAdviceText bold>¡TRES MESES GRATIS!</FreeAdviceText>
                  <FreeAdviceText>
                    Selecciona una opción de pago para después de finalizada tu
                    prueba gratuita de 3 meses, hoy no se te cobrara nada ni es
                    necesario dar de alta tus datos de pago, podrás proceder al
                    pago cuando acabe el periodo gratuito de tres meses.
                  </FreeAdviceText>
                  <PaypalPlan />
                  <TermsRow>
                    <TermsRowText>
                      Acepto los terminos y condiciones del servicio
                    </TermsRowText>
                    <TermsRowCheckbox>
                      <BouncyCheckbox
                        size={20}
                        fillColor="#EF0E73"
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderColor: "#EF0E73" }}
                        style={{ marginLeft: 20 }}
                      />
                    </TermsRowCheckbox>
                  </TermsRow>
                  <RegisterButton>
                    <RegisterButtonText>Registrarse</RegisterButtonText>
                  </RegisterButton>
                </>
              )}
            </Formik>
          </FormWrapper>
          <View style={{ height: 100 }} />
        </GeneralWrapper>
      </Layout>
    );
  }
}
