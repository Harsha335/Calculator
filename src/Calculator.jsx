import React, { useState } from 'react'
import styled from 'styled-components'
import {buttonValues} from './data'
import Button from './Button'
import bg from "./images/CALCULATOR.png"
import {tab} from "./responsive"

const Container=styled.div`
    display: flex;
    background-image:url(${bg});
    height: 100vh;
    width: 100vw;
`
const Blank=styled.div`
    flex:1;
    ${tab({display:"none"})};
`
const Right=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const CalculatorConatainer=styled.div`
    background-color:black;
    height: 75%;
    width:50%;
    border-radius: 20px;
    color:white;
    box-sizing: border-box;
`
const Display=styled.input`
    background-color: whitesmoke;
    width: 90%;
    height: 10%;
    border-radius: 20px;
    text-align: right;
    margin:20px 3%;
    font-weight:600;
    font-size:25px;
`
const Buttons=styled.div`
    width: 96%;
    height: 80%;
    padding:10px;
    display: grid;
    grid-template-columns:auto auto auto auto;
    gap:15px 15px;
`

const Calculator = () => {
    const [input,setInput]=useState("");
    //const [result,setResult]=useState(0);

    const handler=(x)=>{
        setInput(x);
    }
  

  return (
    <Container>
        <Blank></Blank>
        <Right>
            <CalculatorConatainer>
                <Display value={input} name="input"/>
                <Buttons>
                    {
                        buttonValues.map((item)=>
                        <Button item={item} key={item.id} in={input} handler={handler}/>)
                    }
                </Buttons>
            </CalculatorConatainer>
        </Right>
      
    </Container>
  )
}

export default Calculator
