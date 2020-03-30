import React, { useState, useEffect } from 'react'
import Question from "./Question";
import {apiGetQuestions, apiSetQuestionState} from "./api/endpoints";

const QuestionList = () => {
    const [questions, setQuestions] = useState([]);

    async function getQuestions() {
        setQuestions(await apiGetQuestions());
    }

    async function openQuestion(questionId) {
        if (await apiSetQuestionState(questionId, 'open')) {
            setQuestions(await apiGetQuestions());
        }
        else {
            alert("Failed to open " + questionId);
        }
    }

    useEffect(() => {
        getQuestions()
    }, []);

    return (
        <div>
            {questions.map(question => (
                <div key={question.id} className="question-in-list">
                    <Question question={question}/>
                    {question.state === 'closed' &&
                        (<button onClick={() => openQuestion(question.id)} className="start-in-list">Show question</button>)}
                </div>
            ))}
        </div>
        )
}

export default QuestionList