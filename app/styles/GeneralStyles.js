import styled from "styled-components/native";

export const GeneralWrapper = styled.ScrollView`
  flex: 1;
  padding: 30px 15px;
  background: rgba(101, 200, 209, 0.5);
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
export const FormWrapper = styled.View`
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
export const GeneralSelect = styled.Picker`
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
