import React, { useState, useEffect } from 'react'

const Question = ({question}) => (
    <div className="question-content">
        <p>Id: {question.id}</p>
        <p>Question: {question.text}</p>
        <p>State: {question.state}</p>
        {question.choices && (<p>Choices: {JSON.stringify(question.choices)}</p>)}
        {question.correct_answer && (<p>Correct answer: {question.correct_answer}</p>)}
        {question.answers && (
            <p><br/>Answers: {JSON.stringify(question.answers)}</p>)}
    </div>)
export default Question