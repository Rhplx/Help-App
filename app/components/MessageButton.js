import React from "react";

import { MessageButtonContainer, MessageButtonImage } from "../styles/components/MessageButton";

import UserIcon from "../assets/message.png";

export default function MessageButton() {

  const handlePress = () => {
    console.log("Press message");
  };

  return (
    <MessageButtonContainer onPress={handlePress}>
      <MessageButtonImage source={UserIcon} />
    </MessageButtonContainer>
  );
}
