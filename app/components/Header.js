import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  HeaderContainer,
  HeaderLogo,
  HeaderSpace,
  BackButton,
  BackImage,
} from "../styles/components/HeaderStyles";

import Logo from "../assets/logo.png";
import BackIcon from "../assets/back-icon.png";
import SignoutIcon from "../assets/signout.png";

export default function Header({ children, signout }) {
  const navigation = useNavigation();

  const handlePress = () => {
    if (signout) {
      console.log("Signout");
    } else {
      navigation.goBack();
    }
  };

  return (
    <HeaderContainer>
      <BackButton onPress={handlePress}>
        <BackImage source={signout ? SignoutIcon : BackIcon} />
      </BackButton>
      <HeaderLogo source={Logo} />
      {children ? children : (
        <HeaderSpace />
      )}
    </HeaderContainer>
  );
}
