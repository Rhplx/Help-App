import React from "react";

import { UserButtonContainer, UserButtonImage } from "../styles/components/UserButton";

import UserIcon from "../assets/user.png";

export default function UserButton({ navigation }) {

  const handlePress = () => {
    navigation.navigate("Profile");
  };

  return (
    <UserButtonContainer onPress={handlePress}>
      <UserButtonImage source={UserIcon} />
    </UserButtonContainer>
  );
}
