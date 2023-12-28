import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";


function GamePlay() {

    const [selectedNumber, setSelectedNumber] = useState();
    const [CurrentDice,setCurrentDice]=useState(1);
    const [score,setScore]=useState(0);
    const [error,setError]=useState("");
    const [showRules,setShowRules]=useState(false);

    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }

    const rollDice=()=>{

        if (!selectedNumber){//stop dices from rolling
            setError("You need to select a number from below")
            return
        }
         setError("") 

        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);
        // console.log(randomNumber);


        if (selectedNumber==randomNumber) {
            setScore((prev)=>prev+randomNumber);
        }else{
            setScore((prev)=>prev-2);
        }

        setSelectedNumber(undefined)//unselect the number 
    }

    const resetScore = ()=>{
        setScore(0)
    }




    return(
<MainContainer>
    <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector 
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
        </div>
        <RollDice
        CurrentDice={CurrentDice}
        rollDice={rollDice}
        />
        <div className="btns">
            <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
            <Button 
            onClick={()=>setShowRules((prev)=>!prev)}
            >{showRules ?"Hide":"Show"} Rules</Button>
        </div>

 {showRules && <Rules/>} 
</MainContainer>
        )
    
}
export default GamePlay;

const MainContainer=styled.main`

padding-top:60px;

.top_section{
display:flex;
justify-content:space-around;
align-items:end;
}

.btns{
    margin-top:40px;
    gap:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
    align-items:center;
    gap:10px;
}
`;