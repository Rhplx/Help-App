import React from "react";
import {
  HeaderContainer,
  HeaderLogo,
  BackButton,
  BackImage,
} from "../styles/components/HeaderStyles";
import Logo from "../assets/logo.png";
import BackIcon from "../assets/back-icon.png";

export default function Header() {
  return (
    <HeaderContainer>
      <BackButton>
        <BackImage source={BackIcon} />
      </BackButton>
      <HeaderLogo source={Logo} />
    </HeaderContainer>
  );
}
