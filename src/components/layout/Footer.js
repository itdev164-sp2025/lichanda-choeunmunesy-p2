import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.lightGray};
  padding: 2rem 0;
  text-align: center;
  margin-top: 2rem;
`;

const FooterLink = styled(Link)`
  margin: 0 1rem;
  color: ${props => props.theme.colors.darkGray};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/categories">Categories</FooterLink>
        <FooterLink to="/about">About</FooterLink>
      </div>
      <p style={{ marginTop: '1rem', color: '#666' }}>
        © {new Date().getFullYear()} Tasty Recipes. All rights reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;