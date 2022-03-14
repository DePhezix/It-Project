import React, {useState} from 'react'
import styled from 'styled-components'
import {CalendarOutlined, CloseOutlined} from '@ant-design/icons'

function Header() {
    const [showPopUp, setShowPopUp] = useState(false);
    const [formNumber, setFormNumber] = useState('first');
    const [howLong, setHowLong] = useState('');
    const [zipCode, setZipCode] = useState('');
    const howLongFunction = (e) => {
        if (!e.target.validity.patternMismatch) {
          setHowLong(e.target.value);
        }
    }
    const zipCodeFunction = (e) => {
        if (!e.target.validity.patternMismatch) {
          setZipCode(e.target.value);
        }
    }
    const closeFunctionality = () => {
        setShowPopUp(false);
        setFormNumber('first');
        setHowLong('');
        setZipCode('');
    }
   

  return (
    <div>
        <Container onClick={() => setShowPopUp(true)}>
            <CalendarOutlined />
        </Container>
        <PopUp style={showPopUp ? {opacity: '1', zIndex:100000} : null}>
            <Booking style={showPopUp && formNumber === 'first' ? {transform: 'translateY(0px)'} : null} >
               <CloseOutlined onClick={closeFunctionality} />
               <Form>
                   <div>
                    <label htmlFor="date">Select Your Vacation Day</label>
                    <input id="date" type="date" className='date'/>
                   </div>
                   <div style={{flexDirection: 'row'}}>
                    <div style={{flexDirection: 'column', border: '1px solid black', borderRadius: '1em', height: '110%', marginLeft: '10px', marginRight: '10px'}}>
                        <label htmlFor="howLong" style={{fontSize: '15px', marginBottom: '10px'}}>How Long Do You Wish To Stay</label>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10px'}}>
                            <input id="howLong" maxLength='1'  className='howLong' pattern="^[0-9]*$" onChange={howLongFunction} value={howLong} /> <label htmlFor="howLong" style={{fontSize: '14px'}}>Days </label>
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', border: '1px solid black', borderRadius: '1em', marginLeft: '10px', marginRight: '10px', height: '110%'}}>
                        <label htmlFor="zipCode" style={{fontSize: '15px', marginBottom: '10px'}}>Zip Code</label>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10px'}}>
                            <input id="zipCode" maxLength='5'  className='zipCode' pattern="^[0-9]*$" onChange={zipCodeFunction} placeholder='XXXXX' value={zipCode} />
                        </div>
                    </div>
                   </div>
                   <Tents className='tents'>
                        <TentOptions></TentOptions>
                        <TentDescription></TentDescription>
                    </Tents>
               </Form>
            </Booking>
            <Booking style={showPopUp && formNumber === 'second' ? {transform: 'translateY(0px)'} : null} >
               <CloseOutlined onClick={closeFunctionality} />
               <Form>
                   <p onClick={() => setFormNumber('first')}>Back</p>
               </Form>
            </Booking>
        </PopUp>
    </div>
  )
}

export default Header

const Container = styled.div `
    position: fixed;
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

const Booking = styled.div `
    width: 500px;
    height: 500px;
    border-radius: 1em;
    background: white;
    transition: 1.1s ease-in-out;
    transform: translateY(1400px);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;

    svg {
        width: 23px;
        height: 23px;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (max-width: 600px) {
        width: 400px;
        height: 400px;
    }
    @media (max-width: 500px) {
        width: calc(100vw - 3em);
        height: calc(100vh - 30em);
    }

    @media (max-width: 500px) {
        height: 70vh
    }
`

const Form = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    div {
        width: 100%;
        height: 11%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 25px;

        @media (max-width: 600px) {
            height: 15%;
            text-align: center;
            width: 110%;
        }
    }

    .howLong {
        width: 14px;
        border-radius: 1em;
        border: 1px solid black;
        text-align: center;
        margin-right: 10px;
        font-size: 14px;
        height: 14px;
    }

    .zipCode {
        border-radius: 1em;
        width: 100px;
        border: 1px solid black;
        text-align: center;
    }

    .date {
        width: calc(100% - 3em);
        height: 400px;
        border-radius: 1em;
        border: 1px solid black;
        margin-top: 10px;
        text-align: center;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
`

const TentOptions = styled.div `
    width: 90%;
    height: 10%;
    background: white;
    border: 1px solid black;

    .active {
        background: grey;
        color: white;
    }
`

const TentDescription = styled.div `

`

const Tents = styled.div `
    width: 80%;
    height: 500px;
`