import React, { useState, useEffect } from 'react'
import Question from "./Question";
import {apiGetQuestions} from "./api/endpoints";

const QuestionList = () => {
    const [questions, setQuestions] = useState([]);

    async function getQuestions() {
        setQuestions(await apiGetQuestions());
    }

    useEffect(() => {
        getQuestions()
    }, []);

    return (
        <div>
            {questions.map(question => (
                <div key={question.id} className="question-in-list">
                    <Question question={question}/>
                </div>
            ))}
        </div>
        )
}

export default QuestionList