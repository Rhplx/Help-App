// Native imports
import React from "react";
import AppLoading from "expo-app-loading";
import { Alert, StyleSheet } from "react-native";

// Third Party Imports
import { Formik } from "formik";
import * as yup from "yup";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import { getBaseApi, getCities } from "../common/functions";


// Styled Components
import { Text, Platform, View } from "react-native";
import Layout from "./Layout";
import Header from "../components/Header";

import {
  GeneralWrapper,
  GeneralTitle,
  GeneralSubtitle,
  FormWrapper,
  GeneralInput,
  DoubleInputWrapper,
  GeneralImagePicker,
  GeneralImagePickerText,
  RegisterButton,
  RegisterButtonText,
} from "../styles/GeneralStyles";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function PersonalRegister({ navigation }) {
  const [profileImage, setProfileImage] = React.useState(undefined);
  const [idCard, setIdCard] = React.useState(undefined);

  const registerValidationSchema = yup.object().shape({
    name: yup.string().required("Nombre requerido"),
    email: yup
      .string()
      .email("Ingresa un correo valido")
      .required("Correo requerido"),
    password: yup
      .string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$#]){8,16}/, "Contraseña debe ser de 8 a 16 caracteres, 1 especial @#$")
      .required("Contraseña requerida"),
    confirmPassword: yup
      .string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$#]){8,16}/, "Confirmacion Contraseña debe ser de 8 a 16 caracteres, 1 especial @#$")
      .required("Contraseña requerida"),
    whatsapp: yup
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
  const statePlaceholder = {
    label: "Estado",
    value: "",
  };
  const cityPlaceholder = {
    label: "Ciudad",
    value: "",
  };

  React.useEffect(() => {
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

  const mimetype = (name) => {
    let allow = {
      png: "image/png",
      pdf: "application/json",
      jpeg: "image/jpeg",
      jpg: "image/jpg",
    };
    let extention = name.split(".")[1];
    if (allow[extention] !== undefined) {
      return allow[extention];
    } else {
      return undefined;
    }
  };

  const pickImage = async (type) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    let localUri = result.uri;
    let filename = localUri.split('/').pop();
    let fileType = mimetype(filename);
    if (fileType === undefined) {
      alert("Extension no permitida");
      return null;
    }
    if (!result.cancelled) {
      switch (type) {
        case "image":
          setProfileImage({ uri: localUri, name: filename, type: fileType });
          break;
        case "idCard":
          setIdCard({ uri: localUri, name: filename, type: fileType });
          break;
        default:
          Alert.alert("Ooops :(", "Hubo un error");
      }
    }
  };

  const insertUser = (data) => {
    if (data["password"] === data["confirmPassword"]) {
      data["type"] = "user";
      fetch(getBaseApi() + "/manage/User", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(response => {
          if (response.result) {
            if (profileImage !== undefined) {
              let formDat = new FormData();
              formDat.append("action", "image");
              formDat.append("user", response.data.id);
              formDat.append("file", profileImage);
              fetch(getBaseApi() + "/manage/User", {
                method: "PUT",
                body: formDat,
                headers: {
                  'content-type': 'multipart/form-data',
                },
              }).then(res => res.json())
                .then(response => {
                  if (!response.result) {
                    Alert.alert("Ooops :(", response.error);
                  }
                })
                .catch(error => console.log("error", error));
            }
            if (idCard !== undefined) {
              let formDat = new FormData();
              formDat.append("action", "idCard");
              formDat.append("user", response.data.id);
              formDat.append("file", idCard);
              fetch(getBaseApi() + "/manage/User", {
                method: "PUT",
                body: formDat,
                headers: {
                  'content-type': 'multipart/form-data',
                },
              }).then(res => res.json())
                .then(response => {
                  if (!response.result) {
                    Alert.alert("Ooops :(", response.error);
                  }
                })
                .catch(error => console.log("error", error));
            }
            Alert.alert("Exito", "has sido registrado exitosamente, por favor inicia sesión");
            navigation.navigate("Login")
          } else {
            Alert.alert("Ooops :(", response.error);
          }
        })
        .catch(error => console.log("error", error));
    }
    else {
      Alert.alert("Oops :(", "Las contraseñas no coinciden, vuelva a intentar")
    }
  }

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
          <GeneralTitle>Registro para usuarios</GeneralTitle>
          <GeneralSubtitle>
            Registrate para ofrecer y solicitar servicios
          </GeneralSubtitle>
          <FormWrapper>
            <Formik
              validationSchema={registerValidationSchema}
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                whatsapp: "",
                state: "",
                city: "",
              }}
              onSubmit={insertUser}
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
                  <GeneralInput
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    placeholder="Nombre completo"
                    name="name"
                    value={values.name}
                  />
                  {errors.name && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.name}
                    </Text>
                  )}
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
                    onChangeText={handleChange("whatsapp")}
                    onBlur={handleBlur("whatsapp")}
                    placeholder="WhatsApp"
                    name="whatsapp"
                    value={values.whatsApp}
                    keyboardType="number-pad"
                    maxLength={10}
                  />
                  {errors.whatsapp && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.whatsapp}
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
                      name="confirmPassword"
                      placeholder="Repetir Contraseña"
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      value={values.confirmPassword}
                      secureTextEntry
                    />
                  </DoubleInputWrapper>
                  {(errors.password || errors.confirmPassword) && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.password ? errors.password : errors.confirmPassword}
                    </Text>
                  )}
                  <RNPickerSelect
                    onValueChange={handleChange("state")}
                    placeholder={statePlaceholder}
                    value={values.state}
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
                      {
                        "value": "Zacatecas",
                        "label": "Zacatecas"
                      },
                      {
                        "value": "Aguascalientes",
                        "label": "Aguascalientes"
                      },
                      {
                        "value": "Tamaulipas",
                        "label": "Tamaulipas"
                      },
                      {
                        "value": "Jalisco",
                        "label": "Jalisco"
                      },
                      {
                        "value": "Nayarit",
                        "label": "Nayarit"
                      },
                      {
                        "value": "Oaxaca",
                        "label": "Oaxaca"
                      },
                      {
                        "value": "Sonora",
                        "label": "Sonora"
                      },
                      {
                        "value": "Nuevo León",
                        "label": "Nuevo León"
                      },
                      {
                        "value": "Chihuahua",
                        "label": "Chihuahua"
                      },
                      {
                        "value": "Guanajuato",
                        "label": "Guanajuato"
                      },
                      {
                        "value": "Guerrero",
                        "label": "Guerrero"
                      },
                      {
                        "value": "Hidalgo",
                        "label": "Hidalgo"
                      },
                      {
                        "value": "San Luis Potosí",
                        "label": "San Luis Potosí"
                      },
                      {
                        "value": "Sinaloa",
                        "label": "Sinaloa"
                      },
                      {
                        "value": "Colima",
                        "label": "Colima"
                      },
                      {
                        "value": "Distrito Federal",
                        "label": "Distrito Federal"
                      },
                      {
                        "value": "Baja California Sur",
                        "label": "Baja California Sur"
                      },
                      {
                        "value": "Morelos",
                        "label": "Morelos"
                      },
                      {
                        "value": "Quintana Roo",
                        "label": "Quintana Roo"
                      },
                      {
                        "value": "México",
                        "label": "México"
                      },
                      {
                        "value": "Michoacán de Ocampo",
                        "label": "Michoacán de Ocampo"
                      },
                      {
                        "value": "Puebla",
                        "label": "Puebla"
                      },
                      {
                        "value": "Tlaxcala",
                        "label": "Tlaxcala"
                      },
                      {
                        "value": "Yucatán",
                        "label": "Yucatán"
                      },
                      {
                        "value": "Baja California",
                        "label": "Baja California"
                      },
                      {
                        "value": "Tabasco",
                        "label": "Tabasco"
                      },
                      {
                        "value": "Durango",
                        "label": "Durango"
                      },
                      {
                        "value": "Coahuila de Zaragoza",
                        "label": "Coahuila de Zaragoza"
                      },
                      {
                        "value": "Chiapas",
                        "label": "Chiapas"
                      },
                      {
                        "value": "Querétaro",
                        "label": "Querétaro"
                      },
                      {
                        "value": "Veracruz de Ignacio de la Llave",
                        "label": "Veracruz de Ignacio de la Llave"
                      },
                      {
                        "value": "Campeche",
                        "label": "Campeche"
                      }
                    ]}
                  />
                  <RNPickerSelect
                    onValueChange={handleChange("city")}
                    placeholder={cityPlaceholder}
                    value={values.city}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      ...whiteSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain",
                      },
                    }}
                    items={getCities(values.state)}
                  />
                  <GeneralImagePicker>
                    <GeneralImagePickerText
                      title="Carga identificación"
                      onPress={() => pickImage("idCard")}
                      color="grey"
                    />
                  </GeneralImagePicker>
                  <GeneralImagePicker>
                    <GeneralImagePickerText
                      title="Carga selfie"
                      onPress={() => pickImage("image")}
                      color="grey"
                    />
                  </GeneralImagePicker>
                  <RegisterButton onPress={handleSubmit}>
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
