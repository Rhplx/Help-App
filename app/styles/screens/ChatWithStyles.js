import styled from "styled-components/native";

export const ChatGeneral = styled.View`
  margin: 30px 0;
`;
export const ChatWrapper = styled.Pressable`
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  margin: 15px 0;
`;
export const ChatTitleWrapper = styled.View`
  background-color: ${(props) => (props.pink ? "#EF0E73" : "#4EABA1")};
`;
export const ChatTitle = styled.Text`
  font-family: "Roboto_700Bold";
  color: white;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  text-align: left;
  padding: 15px 10px;
`;
export const ChatSubtitleWrapper = styled.View`
  background-color: ${(props) => (props.pink ? "#7d093d" : "#245751")};
`;
export const ChatSubtitle = styled.Text`
  font-family: "Roboto_400Regular";
  color: white;
  font-size: 15px;
  line-height: 20px;
  text-transform: uppercase;
  text-align: left;
  padding: 15px 10px;
`;
