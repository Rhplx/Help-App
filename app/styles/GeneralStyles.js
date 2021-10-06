import styled from "styled-components/native";
import { Link } from "@react-navigation/native";

export const GeneralWrapper = styled.ScrollView`
  flex: 1;
  padding: 30px 15px;
  background: rgba(224, 244, 246, 1);
  text-align: center;
`;
export const GeneralTitle = styled.Text`
  color: #245751;
  font-family: "HindMadurai_700Bold";
  font-size: 30px;
  line-height: 34px;
  text-align: center;
`;
export const GeneralSubtitle = styled.Text`
  color: #ef0e73;
  font-family: "Roboto_400Regular";
  font-size: 18px;
  line-height: 21px;
  margin-top: 10px;
  text-align: center;
  margin-bottom: ${(props) => (props.marginTop ? "10px" : "20px")};
  margin-top: ${(props) => (props.marginTop ? "30px" : "10px")};
`;
export const GeneralTermsLink = styled(Link)`
  width: 100%;
  height: 25px;
  margin: 10px 0;
  align-items: center;
  text-align: center;
`;
export const GeneralTermsText = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #245751;
`;
export const FormWrapper = styled.View`
  width: 100%;
  padding: 20px 0;
`;
export const GeneralInput = styled.TextInput`
  background-color: white;
  text-align: center;
  font-family: "Roboto_400Regular";
  font-size: 18px;
  line-height: 21px;
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
  width: ${(props) => (props.double ? "47%" : "100%")};
`;
export const DoubleInputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const GeneralImagePicker = styled.View`
  background-color: #39b4bb;
  font-size: 18px;
  padding: 4px 18px;
  border-radius: 10px;
  min-height: 50px;
  margin-top: 10px;
  text-align: center;
`;
export const GeneralImagePickerText = styled.Button`
  color: white;
`;
export const FreeAdviceText = styled.Text`
  color: #283593;
  font-family: ${(props) =>
    props.bold ? "Roboto_700Bold" : "Roboto_400Regular"};
  font-size: 16px;
  line-height: 18px;
  margin-top: ${(props) => (props.bold ? "40px" : "10px")};
  text-align: center;
`;
export const TermsRow = styled.View`
  flex-direction: row;
`;
export const TermsRowText = styled.Text`
  width: 80%;
  padding: 15px;
  color: #ef0e73;
  font-family: "Roboto_400Regular";
  font-size: 16px;
  line-height: 18px;
`;
export const TermsRowCheckbox = styled.View`
  width: 20%;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
`;
export const RegisterButton = styled.Pressable`
  background-color: #ef0e73;
  width: 100%;
  padding: 13px 20px;
  border-radius: 10px;
  margin: 10px auto;
`;
export const RegisterButtonText = styled.Text`
  font-family: "Roboto_700Bold";
  color: white;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  text-align: center;
`;
