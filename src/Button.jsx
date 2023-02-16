import React from 'react'
import styled from 'styled-components'

const Conatainer=styled.div`
    //height:70px;
    //width:70px;
    border-radius:20px;
    background-color: #${props=>props.bg};
    cursor:pointer;
    &:hover{
        opacity: 0.9;
        transform: scale(1.1);
    }
`
const Value=styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
   font-size:30px;

`
const Button = (props) => {
    const buttonClick=()=>{//call parent onclick,handler fun
       // alert({props.setin({props.in}+item.value)})
       {
            props.item.value==='C' ? props.handler("0") : 
            props.item.value==='<=' ? props.handler(props.in.slice(0,-1)) :
            props.item.value==='=' ? props.handler(eval?.(props.in)) :
            (props.in ==  '0'  || Object.is(props.in,NaN) || props.in ==  'Infinity' ) ? props.handler(String(props.item.value)) :
            props.handler(props.in + String(props.item.value))
        };
       
    }
  return (
    <Conatainer bg={props.item.bgcolor} onClick={buttonClick}>
        <Value>
            {props.item.value}
        </Value>
    </Conatainer>
  )
}

export default Button
