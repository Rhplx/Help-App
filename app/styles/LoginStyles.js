import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
`;
export const Logo = styled.Image`
  width: 70%;
  max-width: 200px;
  max-height: 100px;
  margin: 20px auto 0;
  resize-mode: contain;
`;
export const Title = styled.Text`
  color: #ef0e73;
  font-family: "HindMadurai_700Bold";
  font-size: 46px;
  line-height: 64px;
`;
export const Subtitle = styled.Text`
  color: #245751;
  font-family: "Roboto_400Regular";
  font-size: 20px;
  line-height: 25px;
`;
export const FormWrapper = styled.View`
  margin: 20px 0;
  width: 100%;
`;
export const Input = styled.TextInput`
  background-color: white;
  font-family: "Roboto_400Regular";
  font-size: 18px;
  line-height: 22px;
  border-radius: 10px;
  width: 100%;
  padding: 15px 20px;
  margin: 10px 0;
`;
export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const Button = styled.Pressable`
  background-color: ${(props) => (props.pink ? "#EF0E73" : "#245751")};
  width: 48%;
  padding: 13px 20px;
  border-radius: 10px;
`;
export const ButtonText = styled.Text`
  font-family: "Roboto_700Bold";
  color: white;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  text-align: center;
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
`;
export const TermsText = styled.Text`
  font-size: 12px;
  line-height: 22px;
  font-family: "Roboto_400Regular";
  color: #245751;
  text-align: center;
`;
