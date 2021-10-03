import styled from "styled-components/native";
import { Link } from "@react-navigation/native";

export const ProposeContainer = styled.View`
  width: 100%;
  height: 93%;
  padding: 30px 16px 0;
  align-items: center;
  justify-content: space-between;
`;
export const ProposeContent = styled.View`
  width: 100%;
  align-items: center;
`;

export const ProposeButton = styled.Pressable`
  background-color: #EF0E73;
  width: 100%;
  max-width: 350px;
  padding: 13px 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  align-items: center;
`;

export const ProposeButtonText = styled.Text`
  font-family: "Roboto_700Bold";
  color: #FFFFFF;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;

export const ProposeTerms = styled(Link)`
  margin: 10px 0;
  font-family: "Roboto_700Bold";
  color: #245751;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;