import React from "react";
import { useRecoilState } from "recoil";
import { userAnswers } from "../App";
import { useState } from "react";
import { useEffect } from "react";
import { decode } from "html-entities";
import Answers from './Answers'

function Question(props){
    // const [answers,setAnswers] = useRecoilState(userAnswers);
    // const [input,setInput] = useState('');
    // // const onClick = () => {
    // //     let newAnswers = [];
    // //     answers.map((answer) => {
    // //         newAnswers.push(answer);
    // //     });
    // //     newAnswers.push(input);
    // //     setAnswers(newAnswers);
    // // };
    // // const onChange = (event) => {
    // //     setInput(event.target.value);
    // // };
    const [questionText, setQuestionText] = useState(""); 
    const divstyle = {
        border: "1px solid red",
        color: "red",
        marginBottom: "1em",
        width:"60%",
        borderRadius: "10px",
        padding:"1em",
        marginLeft:"20%"
    }
    useEffect(() => {
        let questionAsSTRING = decode(props.questionPayload.question);
        setQuestionText(questionAsSTRING);
    }, [questionText])
    return (
        // <div>
        //     {answers.map((Sanswers , i)=>{
        //         return (<h1 key={i}>{Sanswers}</h1>)
        //     })}
        //     <h2>My input: {input}</h2>
        //     <input id="jqjq" type="text"  onChange={onChange}/>
        //     <button type="submit" onClick={onClick}>submit</button>
        // </div>
        <div style={divstyle}>
            <h1>{questionText}</h1>
            <Answers answersPayload = {props.questionPayload} />
        </div>
    );
    
}
export default Question;
