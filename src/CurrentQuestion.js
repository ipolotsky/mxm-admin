import React, { useState, useEffect } from 'react'
import Question from "./Question";
import {apiCurrentQuestion, apiSetQuestionState} from "./api/endpoints";

const CurrentQuestion = () => {

    const [currentQuestion, setCurrentQuestion] = useState({});
    const [loader, setLoader] = useState(false);

    async function getCurrentQuestion() {
        setLoader(true);
        setCurrentQuestion(await apiCurrentQuestion());
        setTimeout(() => setLoader(false), 500);
    }

    async function changeNextState() {
        let newState = currentQuestion.state === 'open' ? 'openToAnswer' : 'closed';
        await apiSetQuestionState(currentQuestion.id, newState);
    }

    async function changeState(newState) {
        await apiSetQuestionState(currentQuestion.id, newState);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getCurrentQuestion()
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    if (currentQuestion === null) {
        return  (
            <div className="current-question">
                {loader && <span className="checked">checked</span>}
                <h2>No current question</h2>
            </div>)
    }

    return (
        <div className="current-question">
            {loader && <span className="checked">checked</span>}
            <h2>Current question:</h2>
            <Question question={currentQuestion}/>

            {/*ВОТ ТАК НАДО, ЖДЕМ, КОГДА БУДЕТ ПОЛЕ STATE ПРИХОДИТЬ ОТ СЕРВЕРА*/}
            {/*<button onClick={ changeNextState } className="start-in-list">*/}
            {/*    {currentQuestion.state === 'open' && (<span>Request answers</span>)}*/}
            {/*    {currentQuestion.state === 'openToAnswer' && (<span>Stop requesting answers. Close.</span>)}*/}
            {/*</button>*/}

            {/*ВОТ ТАК НЕ НАДО*/}
            {/*<button onClick={() => changeState('openToAnswer')} className="start-in-list">Request answers</button>*/}
            <button onClick={() => changeState('closed')} className="start-in-list closed">Close question</button>
        </div>)
}

export default CurrentQuestion