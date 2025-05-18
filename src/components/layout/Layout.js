import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const MainContent = styled.main`
  padding-top: 90px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: calc(100vh - 70px - 120px);
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default Layout;