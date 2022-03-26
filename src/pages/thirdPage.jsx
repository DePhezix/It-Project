import React, {useState} from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import AuroraBackgroundSetup from '../AuroraBackgroundSetup';

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ position: 'absolute', display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function ThirdPage() {
  const [deviceIsComputer, setIsDeviceComputer] = useState(
    window.matchMedia("(min-width: 768px)").matches ? true : false
  );

  console.log(deviceIsComputer)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <AuroraBackgroundSetup
      bgImage={"/images/camping.jpg"}
      style={
        deviceIsComputer
          ? { display: "flex", alignItems: "center", justifyContent: "center" }
          : {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }
      }
    >
      <Slider
        {...settings}
        style={
          deviceIsComputer
            ? { height: "50%", width: "40%", marginRight: "50px" }
            : { height: "50%", width: "80%",  marginTop: '20px' }
        }
      >
        <SliderPresentation>
          <h3>1</h3>
        </SliderPresentation>
        <SliderPresentation>
          <h3>2</h3>
        </SliderPresentation>
        <SliderPresentation>
          <h3>3</h3>
        </SliderPresentation>
        <SliderPresentation>
          <h3>4</h3>
        </SliderPresentation>
        <SliderPresentation>
          <h3>5</h3>
        </SliderPresentation>
        <SliderPresentation>
          <h3>6</h3>
        </SliderPresentation>
      </Slider>
      <Description>
        <h1>Discover & Learn</h1>
        <p>
          Join us as we try out numerous activities from gliding to fishing, as
          we setup our camp, sing songs along the fire at night and much much
          more!
        </p>
      </Description>
    </AuroraBackgroundSetup>
  );
}

const Description = styled.div `
  width: 40%;
  height: 50%;
  z-index: 12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const SliderPresentation = styled.div `
  color: white;
  background: black;
  height: 50vh;
  border-radius: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`