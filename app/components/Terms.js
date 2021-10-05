import React from 'react'
import { GeneralTermsLink, GeneralTermsText } from '../styles/GeneralStyles';

const Terms = () => {
  return (
    <GeneralTermsLink to={{ screen: "Terms" }}>
      <GeneralTermsText>Aviso de Privacidad - Email</GeneralTermsText>
    </GeneralTermsLink>
  );
}

export default Terms;