import React from 'react'
import styled from 'styled-components'
import AuroraBackgroundSetup from '../AuroraBackgroundSetup'

function SecondPage() {
  return (
    <AuroraBackgroundSetup bgImage={"/images/camping.jpg"}>
      <Options>
        <Option></Option>
        <Option></Option>
        <Option></Option>
        <Option></Option>
        <Option></Option>
      </Options>
    </AuroraBackgroundSetup>
  );
}

export default SecondPage

const Option = styled.div`
  height: 300px;
  width: 250px;
  background-color: white;
  border: 1px solid black;
  z-index: 10;
  border-radius: 2em;
  margin: auto;

  @media (max-width: 1000px) {
    height: 250px;
    width: 200px;
  }

  @media (max-width: 650px) {
    width: 100px;
    height: 100px;
    border-radius: 50;
  }
`;

const  Options = styled.div `
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
`