import './Game.css';
import { useState } from 'react';
import Question from './Question';

function Game(){
    const url = "https://opentdb.com/api.php?amount=10&category=20";

    const [result , setResult] = useState([]);
//something seems awfully hardcoded here, if only the user could change these settings!
    const getQuestions = async () => {
        const res = await  fetch(url);
        const data = await res.json();
        //console.log(data.results);
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