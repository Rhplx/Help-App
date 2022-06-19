import React from "react";
import { LayoutContainer, SafeArea } from "../styles/screens/LayoutStyles";

import Background from "../assets/general-bg.png";
import { Platform, StatusBar, View } from "react-native";

export default function Layout({ children }) {
  return (
    <SafeArea platform={Platform.OS} paddingSize={StatusBar.currentHeight}>
      {/* {Platform.OS === "ios" && (
        <View
          style={{
            width: "100%",
            height: 100, // For all devices, even X, XS Max
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#e73734"
          }}
        />
      )} */}
      <LayoutContainer source={Background} resizeMode="cover">
        {children}
      </LayoutContainer>
    </SafeArea>
  );
}
