import React, { useState, useEffect } from 'react'
import Question from "./Question";

const CurrentQuestion = () => {

    const [currentQuestion, setCurrentQuestion] = useState({});
    const [loader, setLoader] = useState(false);

    async function getCurrentQuestion() {
        setLoader(true);
        /*
        try {
            const question = await fetch("https://tinder.pirotech.space/storm/question/", {
                headers: {
                    "X-User": "SPARKY"
                },
            });

            if (question.status === 200) {
                let response = await question.json();
                console.log("Current question " + JSON.stringify(response.result));
                alert(JSON.stringify(response.result));
                return response;
            }
            throw Error(`Failed ${question}, ${await question.json()}`);
        } catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
         */

        let dummyNoQuestion = {"status": "ok", "result": null};
        let dummyQuestion = {"status": "ok", "result": {"id": 1, "state": "closed", "text": "What is correct answer? What is correct answer? What is correct answer?What is correct answer?What is correct answer?What is correct answer? What is correct answer?", "image": null, "choices": ["correct", "incorrect"], "correct_answer": "correct", "answers": []}}

        setCurrentQuestion(dummyQuestion.result);
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