import styled from "styled-components/native";
export const ChatContainer = styled.View`
  flex: 1;
`;

export const ChatTitle = styled.Text`
  font-family: "Roboto_700Bold";
  color: #245751;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin-top: 30px;
`;
export const ChatWrapper = styled.ScrollView`
  padding: 30px 20px;
  flex: 1;
`;
export const ChatRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
`;
export const ChatRowLeft = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
`;
export const ChatTextWrapper = styled.View`
  width: 80%;
`;
export const ChatText = styled.Text`
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  background-color: ${(props) => (props.mine ? "#EFEFEF" : "white")};
  border-radius: 15px;
  overflow: hidden;
  padding: 20px;
`;
export const ChatDate = styled.Text`
  font-size: 10px;
  color: white;
  text-align: right;
  margin: 5px 0;
`;
export const SendWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding: 20px;
  justify-content: space-between;
`;
export const SendInput = styled.TextInput`
  background-color: white;
  text-align: left;
  font-family: "Roboto_400Regular";
  font-size: 14px;
  line-height: 18px;
  border-radius: 10px;
  padding: 10px;
  width: 60%;
`;
export const SendButton = styled.Pressable`
  border-radius: 10px;
  background: #ef0e73;
  width: 35%;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  flex-direction: row;
`;
export const SendText = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 14px;
  line-height: 18px;
  color: white;
  margin-right: 10px;
`;
export const SendIcon = styled.Image`
  width: 17px;
  height: 17px;
  resize-mode: contain;
`;
