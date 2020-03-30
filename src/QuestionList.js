import React, { useState, useEffect } from 'react'
import Question from "./Question";

const QuestionList = () => {
    const [questions, setQuestions] = useState([]);

    async function getQuestions() {
        /*
        try {
            const question = await fetch("https://tinder.pirotech.space/storm/question/control", {
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

        let dummyNoQuestions = {"status": "ok", "result": []};
        let dummyQuestions = {"status": "ok", "result": [{"id": 1, "state": "closed", "text": "What is correct answer?", "image": null, "choices": ["correct", "incorrect"], "correct_answer": "correct", "answers": []}, {"id": 2, "state": "closed", "text": "Another question", "image": null, "choices": ["aaaaaa", "bbbbbb", "ccccccc", "dddddddd"], "correct_answer": "aaaaaa", "answers": []}, {"id": 3, "state": "closed", "text": "Third onw", "image": null, "choices": ["qwer", "qwerty", "asdf", "asdfgh"], "correct_answer": "qwerty", "answers": []}]}
        setQuestions(dummyQuestions.result);
    }

    useEffect(() => {
        getQuestions()
    }, []);


    return (
        <div>
            {questions.map(question => (
                <div className="question-in-list">
                    <Question question={question}/>
                </div>
            ))}
        </div>
        )
}

export default QuestionList