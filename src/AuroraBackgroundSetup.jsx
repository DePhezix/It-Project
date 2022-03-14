import React from 'react'
import styled from 'styled-components'

function AuroraBackgroundSetup({children, bgImage}) {
  return (
    <Container>
        <Image  style={{backgroundImage: `url(${bgImage})`}} />
        {children}
    </Container>
  )
}

export default AuroraBackgroundSetup

const Container = styled.div `
    width: 100vw;
    height: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
`

const Image = styled.div `
    display: flex;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    filter: blur(50px);
    transform: scale(2);
    -webkit-filter: blur(50px);
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    animation: changeOpacity 1s ease-in-out forwards;

    @keyframes changeOpacity {
      from {
        opacity: 0;
      } to {
        opacity: 1;
      }
    }
`