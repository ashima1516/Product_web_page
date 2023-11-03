import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
  <>
  <FooterContainer>
    <FooterText>
        &copy; 2023 DEVTOWN official website.com
    </FooterText>
  </FooterContainer>
  </>
  )
}
const FooterContainer = styled.footer`
  background: #333;
  color: #ff9900;
  padding: 10px 0;
  text-align: center;
  align-self: flex-end
`;

const FooterText = styled.p`
  font-size: 20px;
`;