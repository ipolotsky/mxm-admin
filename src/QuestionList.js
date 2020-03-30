import React from 'react'
import Question from "./Question";
import {apiSetQuestionState} from "./api/endpoints";

const QuestionList = (props) => {

    async function changeState(questionId, newState) {
        if (await apiSetQuestionState(questionId, newState)) {
            props.updateQuestions();
        }
        else {
            alert("Failed to open " + questionId);
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-11 col-md-7" id="accordion">
                {[].concat(props.questions).sort((a, b) => (a.state < b.state) ? 1 : (a.state === b.state) ? ((a.id > b.id) ? 1 : -1) : -1 ).map(question => (
                    <div key={question.id} className="card">
                        <div className="card-header" id="headingOne">
                            <div className="row">
                                <div className="col-8">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" data-toggle="collapse" data-target={"#question" + question.id}
                                                aria-expanded="true" aria-controls={"question" + question.id}>
                                            {question.id}. {question.text}
                                        </button>
                                    </h5>
                                </div>
                                <div className="col-4">
                                    {question.state === 'ready' &&
                                        (<button  onClick={() => changeState(question.id, 'open')}  type="button" className="btn btn-success">Start question</button>)}
                                    {question.state === 'closed' &&
                                        (<div>
                                            <a href="javascript:void(0)" className="badge badge-danger no-pointer">Closed</a>
                                            <a href="javascript:void(0)" onClick={() => changeState(question.id, 'ready')} className="badge badge-warning">set ready again</a>
                                        </div>)}
                                    {question.state === 'open' &&
                                        (<a href="javascript:void(0)" className="badge badge-info no-pointer">Open</a>)}
                                </div>
                            </div>
                        </div>

                        <div id={"question" + question.id} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <Question question={question}/>
                                <div className="text-right">
                                    <a href="#current">scroll up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionList