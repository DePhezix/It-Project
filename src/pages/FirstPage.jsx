import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import AuroraBackgroundSetup from '../AuroraBackgroundSetup'

function FirstPage() {
  const [circle, setCircle] = useState(false);
  var clientDeviceHeight = document.documentElement.clientHeight * 0.7;
  const changeToCircle = () => {
    if (window.scrollY >= clientDeviceHeight) {
      setCircle(true)
    } else (
      setCircle(false)
    )
  }
  useEffect(() => {
    window.addEventListener('scroll', changeToCircle)
  })
    return (
      <AuroraBackgroundSetup bgImage={"/images/camping.jpg"} id="sectionOne">
        <Circle>
          <CircleImage />
        </Circle>
        <TextContainer>
          <h1>UzCamp</h1>
          <p>Book, Reserve, And Enjoy</p>
        </TextContainer>
        <Line
          id="line"
          className={circle ? "circle" : null}
        />
      </AuroraBackgroundSetup>
    );
}

export default FirstPage

const Circle = styled.div `
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
    } 25% {
      transform: translateX(-700px);
    } 100% {
      transform: translate(-300px, -180px);
      border-radius: 50%;
    }
  }

  @media (max-width: 1100px) {
    opacity: 0;
    display: none;
  }
`

const CircleImage = styled.div `
  animation: changeOpacity 1s ease-in-out forwards;
  animation-delay: 2.5s;
  height: 80%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  background-image: url("/images/camping.jpg");
  opacity: 0;

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
    width: 100vw;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 25%;

    h1 {
      font-size: 70px;
    }
    p {
      font-size: 20px;
      margin-top: -30px;
    }
  }
`;

const Line = styled.div`
  width: 400px;
  height: 1px;
  background: white;
  transition: 1s ease-in-out;
  position: absolute;
  top: 70%;
  right: 12%;

  @media (max-width: 1100px) {
    top: 65%;
    right: 52%;
    transform: translate(60%, -35%);
    width: 200px;
  }

  &.circle {
    position: fixed;
    width: 50px !important;
    height: 50px;
    transform: translate(7vw, 18vh);
    border-radius: 50%;
    background-color: black;
    z-index: 10000;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    background-image: url('/images/socialMedia.png');
    border: 1px solid black;

    @media (max-width: 1100px) {
      transform: translate(46vw, 23vh);
    }
  }
`;