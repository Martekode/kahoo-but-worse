import './Game.css';
import { useState } from 'react';
import Question from './Question';

import { useRecoilState } from 'recoil';
import { correctAnswersArray } from '../App';

function Game(){
    const url = "https://opentdb.com/api.php?amount=10&category=20";

    const [result , setResult] = useState([]);
    const [correct_answer_array, setcorrect_answer_array] = useRecoilState(correctAnswersArray);
//something seems awfully hardcoded here, if only the user could change these settings!
    const getQuestions = async () => {
        const res = await  fetch(url);
        const data = await res.json();
        //console.log(data.results);
        let correctAnswersArr = [];
        data.results.map((Sresult)=>{
            correctAnswersArr.push(Sresult.correct_answer);
        });
        console.log(correctAnswersArr);
        setResult(data.results);
    }
    
    return (
        <div>
            <button onClick={getQuestions}>get questions</button>
            <div>
                {result.map((question , i)=>{
                    return <Question questionPayload={question} key={i} />;
                })}
            </div>
        </div>

        

    );
}
export default Game