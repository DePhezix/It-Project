import './App.css';
import FirstPage from './pages/FirstPage';
import styled from 'styled-components';
import React, {useState} from 'react';
import Header from './pages/Header';
import DarkModeToggle from 'react-dark-mode-toggle'

function App() {
  return (
    <Container>
      <Header />
      <FirstPage />
    </Container>
  );
}

export default App;

const Container = styled.div `
  width: 100%;
  height: 100%;
  justify-content: center;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`