import React, {useState} from 'react'
import styled from 'styled-components'
import {CalendarOutlined, CloseOutlined} from '@ant-design/icons'

function Header() {
    const [showBooking, setShowBooking] = useState(false);
  return (
    <>
        <Container onClick={() => setShowBooking(true)}>
            <CalendarOutlined />
        </Container>
        <PopUp style={showBooking ? {opacity: '1', zIndex:100000} : null}>
            <div>
                <Booking style={showBooking ? {transform: 'translateY(0px)'} : null} >
                    <CloseOutlined onClick={() => setShowBooking(false)} />
                </Booking>
            </div>
        </PopUp>
    </>
  )
}

export default Header

const Container = styled.div `
    position: absolute;
    left: 30px;
    top: 0;
    left: 90%;
    width: 40px;
    height: 60px;
    z-index: 10;
    background: orange;
    border-radius: 10px 10px 200px 200px;
    -moz-border-radius: 10px 10px 200px 200px;
    -webkit-border-radius: 10px 10px 200px 200px;
    border: 0px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: moveDown 0.6s;
    cursor: pointer;

    svg {
        width: 30px;
        height: 40px;
        z-index: 100;
    }

    @keyframes moveDown {
        from {
            transform: translateY(-50%);
        }
        to {
            transform: translateY(0px)
        }
    }
`

const PopUp = styled.div `
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    z-index: 0;
    background: rgba(209,209, 209, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    opacity: 0;
    transition: 0.5s ease-in-out;
`

const Booking = styled.div `
    width: 500px;
    height: 500px;
    border-radius: 1em;
    background: white;
    transition: 0.7s ease-in-out;
    transform: translateY(1000px);

    @media (max-width: 600px) {
        width: 400px;
        height: 400px;
    }
    @media (max-width: 500px) {
        width: calc(100vw - 3em);
        height: calc(100vh - 30em);
    }
`