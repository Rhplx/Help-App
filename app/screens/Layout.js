import React from "react";
import { LayoutContainer, SafeArea } from "../styles/screens/LayoutStyles";
import Background from "../assets/general-bg.png";

export default function Layout({ children }) {
  return (
    <SafeArea>
      <LayoutContainer source={Background} resizeMode="cover">
        {children}
      </LayoutContainer>
    </SafeArea>
  );
}
