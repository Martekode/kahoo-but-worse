
import React from "react";
import {SingleAnswer} from "./SingleAnswer";
import { useRecoilState } from "recoil";
import { correctAnswersArray } from "../App";
const merge = (a,b)=>{
    let allAnswers = [a];
    b.map(element =>{
        allAnswers.push(element);
    });
    allAnswers = shuffle(allAnswers);
    return allAnswers;

}
const doStuff = () => {
    
}
export const shuffle = (array)=>{
    array.sort(() => Math.random() - 0.5);
    return array;
}

export function Answers(props) {
    const correctAnswer = props.answersPayload.correct_answer;
    let incorrectAnswers = props.answersPayload.incorrect_answers;
    const allAnswers = merge(correctAnswer,incorrectAnswers);
    const divStyle = {
                        color: "yellow",
                        display : "flex",
                        flexDirection:"row",
                        flexWrap: "wrap"
                    };

    return (
        <ul style={divStyle}>
            {allAnswers.map((answer,i) =>{
                return  <SingleAnswer answer={answer} key={i}/>
            })}
        </ul>
        )
    
}


