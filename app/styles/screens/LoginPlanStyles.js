import styled from "styled-components/native";

export const PlansWrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
`;
export const PlansTitle = styled.Text`
  color: #245751;
  font-family: "HindMadurai_700Bold";
  font-size: 30px;
  line-height: 34px;
`;
export const PlansSubtitle = styled.Text`
  color: #ef0e73;
  font-family: "Roboto_400Regular";
  font-size: 18px;
  line-height: 21px;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 20px;
`;
export const PlansBox = styled.Pressable`
  border-radius: 12px;
  width: 100%;
  margin-bottom: 20px;
`;
export const PlansBoxTitleWrapper = styled.View`
  background-color: ${(props) => (props.pink ? "#ef0e73" : "#FF6600")};
  width: 100%;
  padding: 13px 0;
  border-radius: 12px;
`;
export const PlansBoxTitleWrapperTwo = styled.View`
  background-color: #4eaba1;
  width: 100%;
  padding: 13px 0;
  border-radius: 12px;
`;
export const PlansBoxSubtitleWrapper = styled.View`
  background-color: ${(props) => (props.wine ? "#7d093d" : "#FDC500")};
  width: 100%;
  padding: 43px 20px 13px;
  margin-top: -30px;
  border-radius: 12px;
  position: relative;
  z-index: -1;
`;
export const PlansBoxSubtitleWrapperTwo = styled.View`
  background-color: #245751;
  width: 100%;
  padding: 43px 20px 13px;
  margin-top: -30px;
  border-radius: 12px;
  position: relative;
  z-index: -1;
`;
export const PlansBoxTitle = styled.Text`
  color: white;
  font-family: "Roboto_700Bold";
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: white;
  text-transform: uppercase;
`;
export const PlansBoxSubtitle = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: ${(props) => (props.yellow ? "#FDC500" : "#953C00")};
`;
