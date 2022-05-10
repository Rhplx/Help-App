import styled from "styled-components/native";

export const ProfileContainer = styled.ScrollView`
  flex: 1;
  padding: 20px 0;
  background: rgba(224, 244, 246, 1);
`;

export const ProfileHeader = styled.View`
  width: 100%;
  padding: 5px 16px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ProfileHeaderImage = styled.Image`
  margin-right: 20px;
  width: 140px;
  height: 140px;
  resize-mode: contain;
  border-radius: 100px;
`;

export const ProfileHeaderTitle = styled.Text`
  color: #245751;
  font-family: "HindMadurai_700Bold";
  font-size: 29px;
  line-height: 33px;
  width: 50%;
`;
export const ProfileInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 16px;
`;
export const ProfilePlansBox = styled.Pressable`
  border-radius: 12px;
  width: ${(props) => (props.double ? "90%" : "45%")};
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
  text-transform: uppercase;
`;
export const PlansBoxSubtitle = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: ${(props) => (props.yellow ? "#FDC500" : "#953C00")};
`;
export const ProfilePlan = styled.View`
  padding: 0 16px;
`;
export const ProfileData = styled.View`
  padding: 5px 16px;
  margin-top: 20px;
`;
export const ProfileDataHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ProfileDataTitle = styled.Text`
  font-size: 16px;
  font-family: "Roboto_700Bold";
  line-height: 22px;
`;
export const ProfileDataButton = styled.Pressable`
  background-color: #ef0e73;
  padding: 7px 10px;
  border-radius: 10px;
`;
export const ProfileDataButtonText = styled.Text`
  font-family: "Roboto_700Bold";
  color: white;
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;
  text-align: center;
`;
export const ProfileDataTextRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin: 5px 0;
`;
export const ProfileDataText = styled.Text`
  font-size: 16px;
  line-height: 22px;
  font-family: ${(props) => (props.bold ? "Roboto_700Bold" : "Roboto_700Bold")};
  color: ${(props) => (props.bold ? "black" : "#245751")};
`;
export const ProfileDataImage = styled.Image`
  width: 150px;
  height: 140px;
  resize-mode: contain;
`;
