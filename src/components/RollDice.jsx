import { useState } from "react";
import styled from "styled-components";

function RollDice({rollDice,CurrentDice}) {


    
   return(
    <DiceContainer>
    <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${CurrentDice}.png`} alt="dice1" srcset="" />
    </div>
    <p>Click on dice to roll</p>
    </DiceContainer>
   ) 
}
export default  RollDice;

const DiceContainer=styled.div`
margin-top:50px;
display:flex;
flex-direction:column;
align-items:center;

.dice{
    cursor:pointer;
}

p{
    font-size:20px;
}
`