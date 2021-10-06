import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderLogo = styled.Image`
  position: absolute;
  max-width: 150px;
  max-height: 80px;
  margin: 15px auto 5px;
  resize-mode: contain;
  bottom: -25px;
  left: 50%;
  z-index: 1;
`;

export const HeaderSpace = styled.View`
  background-color: transparent;
  height: 75px;
  width: 45px;
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
