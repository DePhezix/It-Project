import './App.css';
import FirstPage from './pages/FirstPage';
import styled from 'styled-components';
import React, {useState} from 'react';
import Header from './pages/Header';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/thirdPage';
import FourthPage from './pages/fourthPage';

function App() {
  const [isProduction, setIsProduction] = useState(
    !process.env.NODE_ENV || process.env.NODE_ENV === "development" ? false : true
  );

    const closePopup = () => {
      setIsProduction(false) 
    }

  return (
    <Container>
      <Header />
      <PopUp style={isProduction ? { opacity: "1", zIndex: "10000" } : null}>
        <Warning style={isProduction ? { transform: "translateY(0px)" } : null}>
          <h1>Please Be Known That This Application Is Still In Development</h1>
          <button onClick={closePopup}>I understand that this website is still in production</button>
        </Warning>
      </PopUp>
      <Snapper>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
      </Snapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  overflow-x: hidden;
  display: flex;
  flex-flow: column nowrap;
`;

const Snapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  scroll-snap-type: y mandatory;
  overflow: hidden;
  overflow-y: scroll;
`;

const PopUp = styled.div `
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  position: fixed;
  z-index: 0;
  background: rgba(209,209, 209, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  transition: 0.5s ease-in-out;
`

const Warning = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 1em;
  background: white;
  transition: 1.1s ease-in-out;
  transform: translateY(1000px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  transition-delay: 1s;
  text-align: center;
  justify-content: flex-start;

  h1 {
    color: red;
    font-size: 25px;
    margin: 20vh 1vw 0;
  } button {
    transform: translateY(20vh);
    padding: 5px 10px;
    background: green;
    color: white;
    width: 320px;
    height: 50px;
    border-radius: 1em;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    width: calc(100vw - 3em);
    height: calc(100vh - 30em);
  }

  @media (max-width: 500px) {
    height: 70vh
  }
`;