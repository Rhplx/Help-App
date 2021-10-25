// Native imports
import React from "react";
import AppLoading from "expo-app-loading";
import { Alert, StyleSheet } from "react-native";

// Third Party Imports
import { Formik } from "formik";
import * as yup from "yup";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { getBaseApi, getCities } from "../common/functions";

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
  RegisterButtonText
} from "../styles/GeneralStyles";

// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function CompanyRegister({ navigation }) {
  const [profileImage, setProfileImage] = React.useState(undefined);
  const [idCard, setIdCard] = React.useState(undefined);
  const [subservicesCat, setSubservicesCat] = React.useState([]);
  const [subservices, setSubservices] = React.useState([0, 0, 0]);

  const registerValidationSchema = yup.object().shape({
    name: yup.string().required("Nombre requerido"),
    email: yup
      .string()
      .email("Ingresa un correo valido")
      .required("Correo requerido"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){8,16}/,
        "La contraseña debe tener de 8 a 16 caracteres, al menos una mayuscula y un numero"
      )
      .required("Contraseña requerida"),
    confirmPassword: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){8,16}/,
        "La contraseña debe tener de 8 a 16 caracteres, al menos una mayuscula y un numero"
      )
      .required("Contraseña requerida"),
    number: yup
      .number()
      .typeError("Solo numeros")
      .required("Telefono y WhatsApp requerido"),
    whatsapp: yup
      .number()
      .typeError("Solo numeros")
      .required("WhatsApp requerido"),
    RFC: yup
      .string()
      .max(13, ({ max }) => `El maximo de caracteres para RFC es ${max}`)
      .required("RFC requerido"),
    comercialName: yup.string().required("Nombre de la empresa requerido"),
    businessName: yup.string().required("Razón social requerido"),
    street: yup.string().required("Calle y número requerido"),
    position: yup.string().required("Puesto requerido"),
    state: yup.string().required("Estado requerido"),
    city: yup.string().required("Ciudad requerida"),
    details: yup.string().required("Descripcion requerida")
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
      textAlign: "center"
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
      textAlign: "center"
    }
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
      textAlign: "center"
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
      textAlign: "center"
    }
  });
  const statePlaceholder = {
    label: "Estado",
    value: ""
  };
  const cityPlaceholder = {
    label: "Ciudad",
    value: ""
  };
  const servicePlaceholder = {
    label: "Selecciona servicio",
    value: "",
    color: "#ffffff"
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

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      getSubCategories();
    });
  }, []);

  const getSubCategories = () => {
    fetch(getBaseApi() + '/manage/Catalogues?catalogues=["subservices"]', {
      method: "GET"
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          setSubservicesCat(response.data.subservices);
        } else {
          Alert.alert("Ooops :(", response.error);
        }
      })
      .catch((error) => console.log(error));
  };

  const mimetype = (name) => {
    let allow = {
      png: "image/png",
      pdf: "application/json",
      jpeg: "image/jpeg",
      jpg: "image/jpg"
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
      quality: 1
    });
    let localUri = result.uri;
    let filename = localUri.split("/").pop();
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

  const handleValueChange = (value, index) => {
    let values = subservices;
    values[index] = value;
    setSubservices(values);
  };

  let [fontsLoaded] = useFonts({
    HindMadurai_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  });
  const insertCompany = (data) => {
    if (data["password"] === data["confirmPassword"]) {
      data["type"] = "company";
      data["services"] = subservices.map((item) => {
        return item !== "" && item;
      });
      console.log(data);
      fetch(getBaseApi() + "/manage/User", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((response) => {
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
                  "content-type": "multipart/form-data"
                }
              })
                .then((res) => res.json())
                .then((response) => {
                  if (!response.result) {
                    Alert.alert("Ooops :(", response.error);
                  }
                })
                .catch((error) => console.log("error", error));
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
                  "content-type": "multipart/form-data"
                }
              })
                .then((res) => res.json())
                .then((response) => {
                  if (!response.result) {
                    Alert.alert("Ooops :(", response.error);
                  }
                })
                .catch((error) => console.log("error", error));
            }
            Alert.alert(
              "Exito",
              "has sido registrado exitosamente, por favor inicia sesión"
            );
            navigation.navigate("Login");
          } else {
            Alert.alert("Ooops :(", response.error);
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      Alert.alert("Oops :(", "Las contraseñas no coinciden, vuelva a intentar");
    }
  };

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
                name: "",
                position: "",
                email: "",
                password: "",
                confirmPassword: "",
                number: "",
                whatsapp: "",
                comercialName: "",
                businessName: "",
                RFC: "",
                street: "",
                state: "",
                city: "",
                details: ""
              }}
              onSubmit={insertCompany}
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
                    onChangeText={handleChange("position")}
                    onBlur={handleBlur("position")}
                    placeholder="Puesto"
                    name="position"
                    value={values.position}
                  />
                  {errors.position && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.position}
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
                  <DoubleInputWrapper>
                    <GeneralInput
                      double
                      onChangeText={handleChange("whatsapp")}
                      onBlur={handleBlur("whatsapp")}
                      placeholder="WhatsApp"
                      name="whatsapp"
                      value={values.whatsapp}
                      keyboardType="number-pad"
                      maxLength={10}
                    />
                    <GeneralInput
                      double
                      onChangeText={handleChange("number")}
                      onBlur={handleBlur("number")}
                      placeholder="Phone"
                      name="number"
                      value={values.number}
                      keyboardType="number-pad"
                      maxLength={10}
                    />
                  </DoubleInputWrapper>
                  {(errors.number || errors.whatsapp) && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.number ? errors.number : errors.whatsapp}
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
                      {errors.password
                        ? errors.password
                        : errors.confirmPassword}
                    </Text>
                  )}
                  <GeneralSubtitle marginTop>
                    Ingresa los datos de la empresa
                  </GeneralSubtitle>
                  <GeneralInput
                    onChangeText={handleChange("comercialName")}
                    onBlur={handleBlur("comercialName")}
                    placeholder="Nombre comercial de la empresa"
                    name="comercialName"
                    value={values.comercialName}
                  />
                  {errors.comercialName && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.comercialName}
                    </Text>
                  )}
                  <GeneralInput
                    onChangeText={handleChange("businessName")}
                    onBlur={handleBlur("businessName")}
                    placeholder="Razón social"
                    name="businessName"
                    value={values.businessName}
                  />
                  {errors.businessName && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.businessName}
                    </Text>
                  )}
                  <GeneralInput
                    onChangeText={handleChange("RFC")}
                    onBlur={handleBlur("RFC")}
                    placeholder="RFC"
                    name="RFC"
                    value={values.RFC}
                  />
                  {errors.RFC && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.RFC}
                    </Text>
                  )}
                  <GeneralInput
                    onChangeText={handleChange("street")}
                    onBlur={handleBlur("street")}
                    placeholder="Calle y número"
                    name="street"
                    value={values.street}
                  />
                  {errors.street && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.street}
                    </Text>
                  )}
                  <RNPickerSelect
                    onValueChange={handleChange("state")}
                    placeholder={statePlaceholder}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      ...whiteSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain"
                      }
                    }}
                    items={[
                      {
                        value: "Zacatecas",
                        label: "Zacatecas"
                      },
                      {
                        value: "Aguascalientes",
                        label: "Aguascalientes"
                      },
                      {
                        value: "Tamaulipas",
                        label: "Tamaulipas"
                      },
                      {
                        value: "Jalisco",
                        label: "Jalisco"
                      },
                      {
                        value: "Nayarit",
                        label: "Nayarit"
                      },
                      {
                        value: "Oaxaca",
                        label: "Oaxaca"
                      },
                      {
                        value: "Sonora",
                        label: "Sonora"
                      },
                      {
                        value: "Nuevo León",
                        label: "Nuevo León"
                      },
                      {
                        value: "Chihuahua",
                        label: "Chihuahua"
                      },
                      {
                        value: "Guanajuato",
                        label: "Guanajuato"
                      },
                      {
                        value: "Guerrero",
                        label: "Guerrero"
                      },
                      {
                        value: "Hidalgo",
                        label: "Hidalgo"
                      },
                      {
                        value: "San Luis Potosí",
                        label: "San Luis Potosí"
                      },
                      {
                        value: "Sinaloa",
                        label: "Sinaloa"
                      },
                      {
                        value: "Colima",
                        label: "Colima"
                      },
                      {
                        value: "Distrito Federal",
                        label: "Distrito Federal"
                      },
                      {
                        value: "Baja California Sur",
                        label: "Baja California Sur"
                      },
                      {
                        value: "Morelos",
                        label: "Morelos"
                      },
                      {
                        value: "Quintana Roo",
                        label: "Quintana Roo"
                      },
                      {
                        value: "México",
                        label: "México"
                      },
                      {
                        value: "Michoacán de Ocampo",
                        label: "Michoacán de Ocampo"
                      },
                      {
                        value: "Puebla",
                        label: "Puebla"
                      },
                      {
                        value: "Tlaxcala",
                        label: "Tlaxcala"
                      },
                      {
                        value: "Yucatán",
                        label: "Yucatán"
                      },
                      {
                        value: "Baja California",
                        label: "Baja California"
                      },
                      {
                        value: "Tabasco",
                        label: "Tabasco"
                      },
                      {
                        value: "Durango",
                        label: "Durango"
                      },
                      {
                        value: "Coahuila de Zaragoza",
                        label: "Coahuila de Zaragoza"
                      },
                      {
                        value: "Chiapas",
                        label: "Chiapas"
                      },
                      {
                        value: "Querétaro",
                        label: "Querétaro"
                      },
                      {
                        value: "Veracruz de Ignacio de la Llave",
                        label: "Veracruz de Ignacio de la Llave"
                      },
                      {
                        value: "Campeche",
                        label: "Campeche"
                      }
                    ]}
                  />
                  {errors.state && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.state}
                    </Text>
                  )}
                  <RNPickerSelect
                    onValueChange={handleChange("city")}
                    placeholder={cityPlaceholder}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      ...whiteSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain"
                      }
                    }}
                    items={getCities(values.state)}
                  />
                  {errors.city && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.city}
                    </Text>
                  )}
                  <GeneralSubtitle marginTop>
                    Selecciona hasta tres servicios que deseas ofrecer
                  </GeneralSubtitle>
                  <RNPickerSelect
                    onValueChange={(value) => handleValueChange(value, 0)}
                    placeholder={servicePlaceholder}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      ...greenSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain"
                      }
                    }}
                    items={subservicesCat}
                  />
                  <RNPickerSelect
                    onValueChange={(value) => handleValueChange(value, 1)}
                    placeholder={servicePlaceholder}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      ...greenSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain"
                      }
                    }}
                    items={subservicesCat}
                  />
                  <RNPickerSelect
                    onValueChange={(value) => handleValueChange(value, 2)}
                    placeholder={servicePlaceholder}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      ...greenSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain"
                      }
                    }}
                    items={subservicesCat}
                  />
                  <GeneralImagePicker>
                    <GeneralImagePickerText
                      title="Carga identificación"
                      onPress={() => pickImage("idCard")}
                      color="gray"
                    />
                  </GeneralImagePicker>
                  <GeneralImagePicker>
                    <GeneralImagePickerText
                      title="Carga selfie"
                      onPress={() => pickImage("image")}
                      color="gray"
                    />
                  </GeneralImagePicker>
                  <GeneralInput
                    onChangeText={handleChange("details")}
                    onBlur={handleBlur("details")}
                    value={values.details}
                    style={{
                      ...whiteSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain"
                      }
                    }}
                    multiline={true}
                    numberOfLines={10}
                    placeholder="Tu presentación"
                  />
                  {errors.details && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.details}
                    </Text>
                  )}
                  <FreeAdviceText bold>¡TRES MESES GRATIS!</FreeAdviceText>
                  <FreeAdviceText>
                    Selecciona una opción de pago para después de finalizada tu
                    prueba gratuita de 3 meses, hoy no se te cobrara nada ni es
                    necesario dar de alta tus datos de pago, podrás proceder al
                    pago cuando acabe el periodo gratuito de tres meses.
                  </FreeAdviceText>
                  {/* <PaypalPlan /> */}
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
