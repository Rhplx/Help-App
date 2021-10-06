import styled from "styled-components/native";

export const LayoutContainer = styled.ImageBackground`
  flex: 1;
  justify-content: flex-start;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${({ platform, paddingSize }) => platform === "android" ?
    `${paddingSize}px` : "0"
  };
`;
