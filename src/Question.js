import React, { useState, useEffect } from 'react'
import AnswersChart from "./AnswersChart";

const Question = ({question}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{question.id}. {question.text}</h5>
            <p className="card-text">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Field</th>
                        <th scope="col">Data</th>
                    </tr>
                    </thead>
                    <tbody>

                    {question.state && (
                        <tr>
                            <th scope="row">State</th>
                            <td>{question.state}</td>
                        </tr>
                    )}

                    {question.choices && (
                        <tr>
                            <th scope="row">Choices</th>
                            <td>
                                 {question.choices.map((choice, index) => (<div key={index}>{choice}</div>))}
                            </td>
                        </tr>
                    )}

                    {question.correct_answer && (
                        <tr>
                            <th scope="row">Correct_answer</th>
                            <td>{question.correct_answer}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </p>

                {question.answers && (
                    <div>
                        <h5 className="card-title">Answers</h5>
                        <p className="card-text">
                            <div className="answers-card-table">
                                <table className="table table-striped table-dark">
                                    <thead>
                                    <tr>
                                        <th scope="col">User</th>
                                        <th scope="col">Answer</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {[].concat(question.answers).sort((a, b) => (a.created_at > b.created_at) ? -1 : 1).map((answer, index) => (
                                        <tr key={index}>
                                            <th scope="row">{answer.user}</th>
                                            <td>{answer.answer}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                Total answers: {Array.isArray(question.answers) ? question.answers.length : 0}
                            </div>

                            {Array.isArray(question.choices) && question.choices.length != 0  && (<div>
                                <AnswersChart right={question.correct_answer} choices={question.choices} answers={question.answers}/>
                            </div>)}

                        </p>
                    </div>
                )}
        </div>
    </div>
)
export default Question