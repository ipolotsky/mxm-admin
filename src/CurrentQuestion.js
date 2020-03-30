import React, { useState, useEffect } from 'react'
import Question from "./Question";
import {apiCurrentQuestion, apiSetQuestionState} from "./api/endpoints";

const CurrentQuestion = (props) => {

    const [currentQuestion, setCurrentQuestion] = useState({});
    const [loader, setLoader] = useState(false);

    async function getCurrentQuestion() {
        setLoader(true);
        setCurrentQuestion(await apiCurrentQuestion());
        setTimeout(() => setLoader(false), 500);
    }

    async function changeState(newState) {
        await apiSetQuestionState(currentQuestion.id, newState);
        props.updateQuestions();
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getCurrentQuestion()
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    if (currentQuestion === null) {
        return  (
            <div className="row justify-content-center">
                <div className="col-11">
                    <div className="jumbotron">
                        {loader && <span className="checked">synced</span>}
                        <h2>No current question</h2>
                    </div>
                </div>
            </div>)
    }

    return (
        <div className="row justify-content-center">
            <div className="col-11">
                <div className="jumbotron">
                    {loader && <span className="checked">synced</span>}
                    <div className="container">
                        <h1 className="display-5">Current question</h1>
                        <p>
                            <Question question={currentQuestion}/>
                        </p>
                        <p><button onClick={() => changeState('closed')} className="btn btn-danger btn-lg" href="#" role="button">Close question</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentQuestion