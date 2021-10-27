import React from "react";
import AppLoading from "expo-app-loading";
import { Text, View, Alert, StyleSheet } from "react-native";

// Styled Components & Components
import Layout from "../Layout";
import Header from "../../components/Header";
import {
  ProfileContainer,
  ProfileHeader,
  ProfileHeaderImage,
  ProfileHeaderTitle,
  ProfileInfo,
  ProfilePlansBox,
  ProfilePlan,
  ProfileData,
  ProfileDataHeader,
  ProfileDataTitle,
  ProfileDataButton,
  ProfileDataButtonText,
  ProfileDataTextRow,
  ProfileDataText,
  ProfileDataImage,
} from "../../styles/screens/people/Profile";
import {
  PlansBoxTitleWrapper,
  PlansBoxTitle,
  PlansBoxSubtitleWrapper,
  PlansBoxSubtitle,
  PlansBoxTitleWrapperTwo,
  PlansBoxSubtitleWrapperTwo,
} from "../../styles/screens/LoginPlanStyles";
import {
  PaypalGeneral,
  PayPalRow,
  PaypalTitleWrapper,
  PaypalTitle,
  PaypalLogo,
  PaypalLogoWrapper,
  PaypalAnual,
  PaypalAnualTitle,
  PaypalCheckboxWrapper,
} from "../../styles/components/PaypalPlanStyles";
import {
  GeneralSubtitle,
  FormWrapper,
  GeneralInput,
  RegisterButton,
  RegisterButtonText,
  GeneralImagePicker,
  GeneralImagePickerText,
  DoubleInputWrapper,
} from "../../styles/GeneralStyles";
// Assets and fonts
import { useFonts, HindMadurai_700Bold } from "@expo-google-fonts/hind-madurai";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import Example from "../../assets/people.png";
import DefaultCard from "../../assets/defaultIdCard.png";
import PaypalImage from "../../assets/paypal-logo.png";

// Third Party Imports
import { Formik } from "formik";
import * as yup from "yup";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkSession, getBaseApi, getCities } from "../../common/functions";
import { clearAsyncStorage } from "../../common/syncStorage";

export default function Profile({ route, navigation }) {
  const [userData, setUserData] = React.useState({});
  const [contactEdit, setContactEdit] = React.useState(false);
  const [serviceEdit, setServiceEdit] = React.useState(false);
  const [detailsEdit, setDetailsEdit] = React.useState(false);
  const [idCardEdit, setIdCardEdit] = React.useState(false);
  const [subservicesCat, setSubservicesCat] = React.useState([]);
  const [subservices, setSubservices] = React.useState([0, 0, 0]);
  const [idCard, setIdCard] = React.useState(undefined);

  const ContactValidation = yup.object().shape({
    email: yup
      .string()
      .email("Ingresa un correo valido")
      .required("Correo requerido"),
    whatsapp: yup
      .number()
      .typeError("Solo numeros")
      .required("WhatsApp requerido"),
    number: yup
      .number()
      .typeError("Solo numeros")
      .required("WhatsApp requerido"),
  });

  const detailsValidation = yup.object().shape({
    details: yup.string().required("Descripcion requerida"),
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
      color: "black",
    },
    inputAndroid: {
      color: "black",
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

  const servicePlaceholder = {
    label: "Selecciona servicio",
    value: 0,
    color: "#ffffff",
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
    navigation.addListener("focus", () => {
      checkSession(navigation);
      getProfileDetails();
    });
  }, []);

  React.useEffect(() => {
    getSubCategories();
  }, [serviceEdit]);

  const getProfileDetails = async () => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    fetch(getBaseApi() + "/manage/User", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionId,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          setUserData(response.data);
          let services = [];
          response.data.services.forEach((item) => {
            services.push(item.id);
          });
          setSubservices(services);
        } else {
          if (response.error === "Error: Sesión Invalida") {
            clearAsyncStorage(navigation);
          } else {
            Alert.alert("Ooops :(", response.error, [
              {
                text: "Ok",
              },
            ]);
          }
        }
      })
      .catch((error) => console.error(error));
  };

  const getSubCategories = () => {
    fetch(getBaseApi() + '/manage/Catalogues?catalogues=["subservices"]', {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          setSubservicesCat(response.data.subservices);
        } else {
          Alert.alert("Ooops :(", response.error);
        }
      })
      .catch((error) => console.error(error));
  };

  const updateUser = async (values, action) => {
    let sessionId = await AsyncStorage.getItem("sessionId");
    values["action"] = action;
    fetch(getBaseApi() + "/manage/User", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + sessionId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          setContactEdit(false);
          setServiceEdit(false);
          setDetailsEdit(false);
          getProfileDetails();
        } else {
          if (response.error === "Error: Sesión Invalida") {
            clearAsyncStorage(navigation);
          } else {
            Alert.alert("Ooops :(", response.error, [
              {
                text: "Ok",
              },
            ]);
          }
        }
      })
      .catch((error) => console.error(error));
  };

  const handleValueChange = (value, index) => {
    let values = subservices;
    values[index] = value;
    setSubservices(values);
  };

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

  const updateIdCard = () => {
    let formDat = new FormData();
    formDat.append("action", "idCard");
    formDat.append("user", userData.id);
    formDat.append("file", idCard);
    fetch(getBaseApi() + "/manage/User", {
      method: "PUT",
      body: formDat,
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.result) {
          Alert.alert("Genial!", "Tu archivo ha sido reemplazado con éxito");
          setIdCardEdit(false);
          getProfileDetails();
        } else {
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
        <Header />
        <ProfileContainer>
          <ProfileHeader>
            <ProfileHeaderImage
              source={
                userData.profileImage ? { uri: userData.profileImage } : Example
              }
            />
            <ProfileHeaderTitle>{userData.name}</ProfileHeaderTitle>
          </ProfileHeader>
          <GeneralSubtitle>Tus datos, chats y reseñas</GeneralSubtitle>
          <ProfileInfo>
            <ProfilePlansBox>
              <PlansBoxTitleWrapper pink>
                <PlansBoxTitle>Mis chats</PlansBoxTitle>
              </PlansBoxTitleWrapper>
              <PlansBoxSubtitleWrapper wine>
                <PlansBoxTitle>{userData.chats} chats</PlansBoxTitle>
              </PlansBoxSubtitleWrapper>
            </ProfilePlansBox>
            <ProfilePlansBox>
              <PlansBoxTitleWrapperTwo>
                <PlansBoxTitle>Mis reseñas</PlansBoxTitle>
              </PlansBoxTitleWrapperTwo>
              <PlansBoxSubtitleWrapperTwo>
                <PlansBoxTitle>
                  {userData.reviews && userData.reviews.quantity} reseñas
                </PlansBoxTitle>
              </PlansBoxSubtitleWrapperTwo>
            </ProfilePlansBox>
          </ProfileInfo>
          {userData.userType !== 1 && (
            <ProfilePlan>
              <PaypalGeneral>
                <PayPalRow>
                  <PaypalTitleWrapper>
                    <PaypalTitle>Plan Contratado</PaypalTitle>
                  </PaypalTitleWrapper>
                  <PaypalLogoWrapper>
                    <PaypalLogo source={PaypalImage} />
                  </PaypalLogoWrapper>
                </PayPalRow>
                <PayPalRow>
                  <PaypalAnual>
                    <PaypalAnualTitle bold>
                      {userData.paymentMonths === 1
                        ? "Mensual - $99"
                        : userData.paymentMonths === 3
                        ? "Prueba - Gratuito"
                        : userData.paymentMonths === 12
                        ? "Anual - $499"
                        : "----"}
                    </PaypalAnualTitle>
                    <PaypalAnualTitle>
                      Siguiente pago: {userData.nextPaymentDate}
                    </PaypalAnualTitle>
                  </PaypalAnual>
                  <PaypalCheckboxWrapper>
                    <PaypalTitle>Pagar</PaypalTitle>
                  </PaypalCheckboxWrapper>
                </PayPalRow>
              </PaypalGeneral>
            </ProfilePlan>
          )}
          <ProfileData>
            <ProfileDataHeader>
              <ProfileDataTitle>Datos de contacto</ProfileDataTitle>
              {!contactEdit && (
                <ProfileDataButton onPress={() => setContactEdit(true)}>
                  <ProfileDataButtonText>Editar</ProfileDataButtonText>
                </ProfileDataButton>
              )}
            </ProfileDataHeader>
            {!contactEdit ? (
              <>
                <ProfileDataTextRow>
                  <ProfileDataText bold>Email: </ProfileDataText>
                  <ProfileDataText>{userData.email}</ProfileDataText>
                </ProfileDataTextRow>
                <ProfileDataTextRow>
                  <ProfileDataText bold>Tel: </ProfileDataText>
                  <ProfileDataText>{userData.phoneNumber}</ProfileDataText>
                </ProfileDataTextRow>
                <ProfileDataTextRow>
                  <ProfileDataText bold>WhatsApp: </ProfileDataText>
                  <ProfileDataText>{userData.phoneNumber}</ProfileDataText>
                </ProfileDataTextRow>
                <ProfileDataTextRow>
                  <ProfileDataText bold>Estado: </ProfileDataText>
                  <ProfileDataText>{userData.state}</ProfileDataText>
                </ProfileDataTextRow>
                <ProfileDataTextRow>
                  <ProfileDataText bold>Ciudad: </ProfileDataText>
                  <ProfileDataText>{userData.city}</ProfileDataText>
                </ProfileDataTextRow>
              </>
            ) : (
              <FormWrapper>
                <Formik
                  validationSchema={ContactValidation}
                  initialValues={{
                    email: userData.email,
                    number: userData.phoneNumber,
                    whatsapp: userData.phoneNumber,
                    state: userData.state,
                    city: userData.city,
                  }}
                  onSubmit={(values) => updateUser(values, "contact")}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                  }) => (
                    <>
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
                        onChangeText={handleChange("number")}
                        onBlur={handleBlur("number")}
                        placeholder="Phone number"
                        name="Phone number"
                        value={values.number}
                        keyboardType="number-pad"
                        maxLength={10}
                      />
                      {errors.number && (
                        <Text style={{ fontSize: 10, color: "red" }}>
                          {errors.number}
                        </Text>
                      )}
                      <GeneralInput
                        onChangeText={handleChange("whatsapp")}
                        onBlur={handleBlur("whatsapp")}
                        placeholder="WhatsApp"
                        name="whatsapp"
                        value={values.whatsapp}
                        keyboardType="number-pad"
                        maxLength={10}
                      />
                      {errors.whatsapp && (
                        <Text style={{ fontSize: 10, color: "red" }}>
                          {errors.whatsapp}
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
                            value: "Zacatecas",
                            label: "Zacatecas",
                          },
                          {
                            value: "Aguascalientes",
                            label: "Aguascalientes",
                          },
                          {
                            value: "Tamaulipas",
                            label: "Tamaulipas",
                          },
                          {
                            value: "Jalisco",
                            label: "Jalisco",
                          },
                          {
                            value: "Nayarit",
                            label: "Nayarit",
                          },
                          {
                            value: "Oaxaca",
                            label: "Oaxaca",
                          },
                          {
                            value: "Sonora",
                            label: "Sonora",
                          },
                          {
                            value: "Nuevo León",
                            label: "Nuevo León",
                          },
                          {
                            value: "Chihuahua",
                            label: "Chihuahua",
                          },
                          {
                            value: "Guanajuato",
                            label: "Guanajuato",
                          },
                          {
                            value: "Guerrero",
                            label: "Guerrero",
                          },
                          {
                            value: "Hidalgo",
                            label: "Hidalgo",
                          },
                          {
                            value: "San Luis Potosí",
                            label: "San Luis Potosí",
                          },
                          {
                            value: "Sinaloa",
                            label: "Sinaloa",
                          },
                          {
                            value: "Colima",
                            label: "Colima",
                          },
                          {
                            value: "Distrito Federal",
                            label: "Distrito Federal",
                          },
                          {
                            value: "Baja California Sur",
                            label: "Baja California Sur",
                          },
                          {
                            value: "Morelos",
                            label: "Morelos",
                          },
                          {
                            value: "Quintana Roo",
                            label: "Quintana Roo",
                          },
                          {
                            value: "México",
                            label: "México",
                          },
                          {
                            value: "Michoacán de Ocampo",
                            label: "Michoacán de Ocampo",
                          },
                          {
                            value: "Puebla",
                            label: "Puebla",
                          },
                          {
                            value: "Tlaxcala",
                            label: "Tlaxcala",
                          },
                          {
                            value: "Yucatán",
                            label: "Yucatán",
                          },
                          {
                            value: "Baja California",
                            label: "Baja California",
                          },
                          {
                            value: "Tabasco",
                            label: "Tabasco",
                          },
                          {
                            value: "Durango",
                            label: "Durango",
                          },
                          {
                            value: "Coahuila de Zaragoza",
                            label: "Coahuila de Zaragoza",
                          },
                          {
                            value: "Chiapas",
                            label: "Chiapas",
                          },
                          {
                            value: "Querétaro",
                            label: "Querétaro",
                          },
                          {
                            value: "Veracruz de Ignacio de la Llave",
                            label: "Veracruz de Ignacio de la Llave",
                          },
                          {
                            value: "Campeche",
                            label: "Campeche",
                          },
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
                      <RegisterButton onPress={handleSubmit}>
                        <RegisterButtonText>Guardar</RegisterButtonText>
                      </RegisterButton>
                    </>
                  )}
                </Formik>
              </FormWrapper>
            )}
          </ProfileData>
          {userData.userType !== 1 && (
            <ProfileData>
              <ProfileDataHeader>
                <ProfileDataTitle>Servicios registrados</ProfileDataTitle>
                {!serviceEdit && (
                  <ProfileDataButton onPress={() => setServiceEdit(true)}>
                    <ProfileDataButtonText>Editar</ProfileDataButtonText>
                  </ProfileDataButton>
                )}
              </ProfileDataHeader>
              {!serviceEdit && userData.services ? (
                <>
                  <ProfileDataTextRow>
                    <ProfileDataText>
                      * {userData.services[0]?.name || "---"}
                    </ProfileDataText>
                  </ProfileDataTextRow>
                  <ProfileDataTextRow>
                    <ProfileDataText>
                      * {userData.services[1]?.name || "---"}
                    </ProfileDataText>
                  </ProfileDataTextRow>
                  <ProfileDataTextRow>
                    <ProfileDataText>
                      {" "}
                      * {userData.services[2]?.name || "---"}
                    </ProfileDataText>
                  </ProfileDataTextRow>
                </>
              ) : (
                <>
                  <RNPickerSelect
                    onValueChange={(value) => handleValueChange(value, 0)}
                    placeholder={servicePlaceholder}
                    useNativeAndroidPickerStyle={false}
                    value={subservices[0]}
                    style={{
                      ...whiteSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain",
                      },
                    }}
                    items={subservicesCat}
                  />
                  <RNPickerSelect
                    onValueChange={(value) => handleValueChange(value, 1)}
                    placeholder={servicePlaceholder}
                    useNativeAndroidPickerStyle={false}
                    value={subservices[1]}
                    style={{
                      ...whiteSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain",
                      },
                    }}
                    items={subservicesCat}
                  />
                  <RNPickerSelect
                    onValueChange={(value) => handleValueChange(value, 2)}
                    placeholder={servicePlaceholder}
                    useNativeAndroidPickerStyle={false}
                    value={subservices[2]}
                    style={{
                      ...whiteSelectStyles,
                      iconContainer: {
                        top: 5,
                        right: 12,
                        resizeMode: "contain",
                      },
                    }}
                    items={subservicesCat}
                  />
                  <RegisterButton
                    onPress={() =>
                      updateUser({ services: subservices }, "services")
                    }
                  >
                    <RegisterButtonText>Guardar</RegisterButtonText>
                  </RegisterButton>
                </>
              )}
            </ProfileData>
          )}
          {userData.userType !== 1 && (
            <ProfileData>
              <ProfileDataHeader>
                <ProfileDataTitle>Presentación</ProfileDataTitle>
                {!detailsEdit && (
                  <ProfileDataButton onPress={() => setDetailsEdit(true)}>
                    <ProfileDataButtonText>Editar</ProfileDataButtonText>
                  </ProfileDataButton>
                )}
              </ProfileDataHeader>
              {!detailsEdit ? (
                <ProfileDataTextRow>
                  <ProfileDataText>{userData.details}</ProfileDataText>
                </ProfileDataTextRow>
              ) : (
                <FormWrapper>
                  <Formik
                    validationSchema={detailsValidation}
                    initialValues={{
                      details: userData.details,
                    }}
                    onSubmit={(values) => updateUser(values, "details")}
                  >
                    {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                      errors,
                    }) => (
                      <>
                        <GeneralInput
                          onChangeText={handleChange("details")}
                          onBlur={handleBlur("details")}
                          value={values.details}
                          multiline={true}
                          numberOfLines={10}
                          placeholder="Tu presentación"
                        />
                        {errors.details && (
                          <Text style={{ fontSize: 10, color: "red" }}>
                            {errors.details}
                          </Text>
                        )}
                        <RegisterButton onPress={handleSubmit}>
                          <RegisterButtonText>Guardar</RegisterButtonText>
                        </RegisterButton>
                      </>
                    )}
                  </Formik>
                </FormWrapper>
              )}
            </ProfileData>
          )}
          <ProfileData>
            <ProfileDataHeader>
              <ProfileDataTitle>Identificación</ProfileDataTitle>
              {!idCardEdit && (
                <ProfileDataButton onPress={() => setIdCardEdit(true)}>
                  <ProfileDataButtonText>Editar</ProfileDataButtonText>
                </ProfileDataButton>
              )}
            </ProfileDataHeader>
            {!idCardEdit ? (
              <ProfileDataTextRow>
                <ProfileDataImage
                  source={
                    userData.idCardImage
                      ? { uri: userData.idCardImage }
                      : DefaultCard
                  }
                />
              </ProfileDataTextRow>
            ) : (
              <>
                <GeneralImagePicker color="transparent">
                  <GeneralImagePickerText
                    title="Carga identificación"
                    onPress={() => pickImage("idCard")}
                    color="#39b4bb"
                  />
                </GeneralImagePicker>
                <DoubleInputWrapper>
                  <View style={{ width: "48%" }}>
                    <RegisterButton
                      color="gray"
                      onPress={() => setIdCardEdit(false)}
                    >
                      <RegisterButtonText>Cancelar</RegisterButtonText>
                    </RegisterButton>
                  </View>
                  <View style={{ width: "48%" }}>
                    <RegisterButton onPress={() => updateIdCard()}>
                      <RegisterButtonText>Guardar</RegisterButtonText>
                    </RegisterButton>
                  </View>
                </DoubleInputWrapper>
              </>
            )}
          </ProfileData>
          <View style={{ height: 50 }}></View>
        </ProfileContainer>
      </Layout>
    );
  }
}
