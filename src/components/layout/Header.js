import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  margin-left: auto;
`;

const NavLink = styled(Link)`
  margin-left: 1.5rem;
  color: ${props => props.theme.colors.text};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo>Tasty Recipes</Logo>
      </Link>
      
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/about">About</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;