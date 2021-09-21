import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderLogo = styled.Image`
  max-width: 120px;
  max-height: 70px;
  margin: 15px auto 5px;
  resize-mode: contain;
`;
export const BackButton = styled.Pressable`
  background-color: #65c8d1;
  height: 75px;
  width: 45px;
  justify-content: center;
  align-items: center;
`;
export const BackImage = styled.Image`
  max-width: 35px;
  max-height: 35px;
  resize-mode: contain;
`;
