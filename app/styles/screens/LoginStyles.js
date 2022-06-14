import styled from "styled-components/native";
import { Link } from "@react-navigation/native";

export const Container = styled.ScrollView`
  flex: 1;
  /* justify-content: flex-start;
  align-items: center; */
  padding: 0 30px;
`;
export const Logo = styled.Image`
  width: 70%;
  max-width: 260px;
  max-height: 150px;
  margin: 20px auto 0;
  resize-mode: contain;
`;
export const Title = styled.Text`
  color: #ef0e73;
  font-family: "HindMadurai_700Bold";
  font-size: 44px;
  line-height: 64px;
  text-align: center;
`;
export const Subtitle = styled.Text`
  color: #245751;
  font-family: "Roboto_400Regular";
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`;
export const FormWrapper = styled.View`
  margin: 20px 0;
  width: 100%;
`;
export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;
export const Button = styled.Pressable`
  background-color: ${(props) => (props.pink ? "#EF0E73" : "#245751")};
  width: 48%;
  padding: 13px 20px;
  border-radius: 10px;
`;
export const ButtonLink = styled(Link)`
  width: 100%;
  text-align: center;
`;
export const ButtonText = styled.Text`
  font-family: "Roboto_700Bold";
  color: white;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  text-align: center;
`;
export const ButtonForgot = styled.Text`
  font-family: "Roboto_400Regular";
  color: white;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin: 20px 0;
`;
export const Paragraph = styled.Text`
  font-size: 14px;
  line-height: 22px;
  font-family: "Roboto_400Regular";
  color: white;
  margin-top: 16px;
  text-align: center;
`;
export const TermsWrapper = styled.Text`
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
  text-align: center;
`;
export const TermsText = styled(Link)`
  font-size: 12px;
  line-height: 22px;
  font-family: "Roboto_400Regular";
  color: #245751;
  text-align: center;
`;
