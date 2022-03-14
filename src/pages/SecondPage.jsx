import React from 'react'
import styled from 'styled-components'
import AuroraBackgroundSetup from '../AuroraBackgroundSetup'

function SecondPage() {
  return (
    <AuroraBackgroundSetup bgImage={"/images/camping.jpg"}>
      <Circle>
        <CircleImage />
      </Circle>
      <TextContainer>
        <h1>UzCamp</h1>
        <p>Book, Reserve, And Enjoy</p>
      </TextContainer>
      <Line className="circle" />
    </AuroraBackgroundSetup>
  );
}

export default SecondPage

const Image = styled.div`
  background-image: url("/images/camping.jpg");
  display: flex;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  filter: blur(50px);
  transform: scale(1.1);
  -webkit-filter: blur(50px);
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  animation: changeOpacity 1s ease-in-out forwards;

  @keyframes changeOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Circle = styled.div`
  height: 180%;
  width: 10000%;
  background: transparent;
  animation: borderRadiusChange 1.5s ease-in-out forwards;
  transform: translateX(-2000px);
  animation-delay: 1s;
  overflow: hidden;
  border: 1px solid white;

  @keyframes borderRadiusChange {
    0% {
      transform: translateX(-2000px);
    }
    25% {
      transform: translateX(-700px);
    }
    100% {
      transform: translate(-300px, -180px);
      border-radius: 50%;
    }
  }

  @media (max-width: 1000px) {
    opacity: 0;
    display: none;
  }
`;

const CircleImage = styled(Image)`
  filter: blur(0px);
  transform: scale(1);
  -webkit-filter: blur(0px);
  animation: changeOpacity 1s ease-in-out forwards;
  animation-delay: 2.5s;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  height: 80%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;

  @keyframes changeOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  height: 100%;
  transform: translateX(-170px);
  align-items: center;

  h1 {
    font-size: 100px;
    text-align: center;
  }
  p {
    font-size: 30px;
    width: 100%;
    margin-top: -50px;
    text-align: center;
  }

  @media (max-width: 1100px) {
    width: 25%;

    h1 {
      font-size: 70px;
    }
    p {
      font-size: 20px;
      margin-top: -30px;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    transform: translateX(0px);
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  transition: 0.5s ease-in-out;

  &.circle {
    position: fixed;
    width: 50px;
    height: 50px;
    transform: translate(90vw, 90vh);
    border-radius: 50%;
    background-color: black;
  }

  @media (max-width: 1000px) {
    width: 300px;
  }
`;