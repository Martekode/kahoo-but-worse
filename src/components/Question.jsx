import React from "react";
import { useRecoilState } from "recoil";
import { userAnswers } from "../App";
import { useState } from "react";

function Question(){
    const [answers,setAnswers] = useRecoilState(userAnswers);
    const [input,setInput] = useState('');
    const onClick = () => {
        let newAnswers = [];
        answers.map((answer) => {
            newAnswers.push(answer);
        });
        console.log(input)
        console.log(newAnswers)
        console.log(answers)
        newAnswers.push(input);
        console.log(newAnswers)
        setAnswers(newAnswers);
    };
    const onChange = (event) => {
        setInput(event.target.value);
    };
    return (
        <div>
            {answers.map((Sanswers , i)=>{
                return (<h1 key={i}>{Sanswers}</h1>)
            })}
            <h2>My input: {input}</h2>
            <input id="jqjq" type="text" value={input} onChange={onChange}/>
            <button type="submit" onClick={onClick}>submit</button>
        </div>
    )
}
export default Question;