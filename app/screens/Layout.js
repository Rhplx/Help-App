import React from "react";
import { LayoutContainer, SafeArea } from "../styles/screens/LayoutStyles";

import Background from "../assets/general-bg.png";
import { Platform, StatusBar } from "react-native";

export default function Layout({ children }) {
  return (
    <SafeArea platform={Platform.OS} paddingSize={StatusBar.currentHeight}>
      <LayoutContainer source={Background} resizeMode="cover">
        {children}
      </LayoutContainer>
    </SafeArea>
  );
}
