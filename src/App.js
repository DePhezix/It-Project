import './App.css';
import FirstPage from './pages/FirstPage';
import styled from 'styled-components';
import React from 'react';
import Header from './pages/Header';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/thirdPage';
import FourthPage from './pages/fourthPage';

function App() {
  var clientDeviceHeight = document.documentElement.clientHeight
  return (
    <Container style={{height: clientDeviceHeight * 4}}>
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </Container>
  );
}

export default App;

const Container = styled.div `
  width: 100vw;
  justify-content: center;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  -ms-overflow-style: none; 
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`