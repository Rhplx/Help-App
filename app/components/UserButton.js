import React from "react";

import { UserButtonContainer, UserButtonImage } from "../styles/components/UserButton";

import UserIcon from "../assets/user.png";

export default function UserButton() {

  const handlePress = () => {
    console.log("Press user");
  };

  return (
    <UserButtonContainer onPress={handlePress}>
      <UserButtonImage source={UserIcon} />
    </UserButtonContainer>
  );
}
