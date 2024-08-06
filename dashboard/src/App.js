// src/App.js
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const AppContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Sidebar />
        <Content>
          <Navbar />
          <Dashboard />
        </Content>
      </AppContainer>
    </>
  );
}

export default App;
