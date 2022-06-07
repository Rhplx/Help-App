import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  HeaderContainer,
  HeaderLogo,
  HeaderSpace,
  BackButton,
  BackImage
} from "../styles/components/HeaderStyles";

import Logo from "../assets/logo.png";
import BackIcon from "../assets/back-icon.png";
import SignoutIcon from "../assets/signout.png";
import { clearAsyncStorage } from "../common/syncStorage";

export default function Header({ children, signout }) {
  const navigation = useNavigation();

  const handlePress = () => {
    if (signout) {
      clearAsyncStorage(navigation);
    } else {
      navigation.goBack();
    }
  };

  return (
    <HeaderContainer>
      <BackButton onPress={handlePress}>
        <BackImage source={signout ? SignoutIcon : BackIcon} />
      </BackButton>
      <HeaderLogo
        source={Logo}
        style={[
          {
            transform: [{ translateX: -60 }, { translateY: -13 }]
          }
        ]}
      />
      {children ? children : <HeaderSpace />}
    </HeaderContainer>
  );
}
