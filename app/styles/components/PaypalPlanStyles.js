import styled from "styled-components/native";

export const PaypalGeneral = styled.View`
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  margin: 20px 0;
`;
export const PayPalRow = styled.View`
  flex-direction: row;
  margin-top: ${(props) => (props.bottom ? "-10px" : "0")};
  position: relative;
  z-index: ${(props) => (props.bottom ? "-2" : "1")};
  elevation: ${(props) => (props.bottom ? "-2" : "1")};
`;
export const LastPaypalRow = styled.View`
  flex-direction: row;
  margin-top: -10px;
  position: relative;
  z-index: -3;
  elevation: -3;
`;

export const PaypalTitleWrapper = styled.View`
  background-color: #ff6600;
  padding: 15px;
  width: 80%;
  height: 52px;
  border-bottom-left-radius: 12px;
`;
export const PaypalTitle = styled.Text`
  color: white;
  font-family: "Roboto_700Bold";
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  text-align: center;
`;
export const PaypalLogoWrapper = styled.View`
  width: 20%;
  padding: 10px 0;
  background-color: #b3e7ff;
  height: 52px;
  align-items: center;
  justify-content: center;
`;
export const PaypalLogo = styled.Image`
  width: 35px;
  height: 35px;
  resize-mode: contain;
`;
export const PaypalAnual = styled.View`
  background-color: ${(props) => (props.last ? "#FFD84E" : "#fdc500")};
  padding: 25px 10px 15px;
  width: 80%;
  height: 72px;
  border-bottom-left-radius: 12px;
`;
export const PaypalAnualTitle = styled.Text`
  color: #953c00;
  font-family: ${(props) =>
    props.bold ? "Roboto_700Bold" : "Roboto_400Regular"};
  font-size: 16px;
  line-height: 18px;
  text-align: center;
`;
export const PaypalCheckboxWrapper = styled.View`
  width: 20%;
  padding: 10px 0;
  background-color: ${(props) => (props.last ? "#283593" : "#03a9f4")};
  height: 72px;
  align-items: center;
  justify-content: center;
`;
