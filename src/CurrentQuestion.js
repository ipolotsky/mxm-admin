import React, { useState, useEffect } from 'react'
import Question from "./Question";
import {apiCurrentQuestion} from "./api/endpoints";

const CurrentQuestion = () => {

    const [currentQuestion, setCurrentQuestion] = useState({});
    const [loader, setLoader] = useState(false);

    async function getCurrentQuestion() {
        setLoader(true);
        setCurrentQuestion(await apiCurrentQuestion());
        setTimeout(() => setLoader(false), 500);
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
        </div>)
}

export default CurrentQuestion