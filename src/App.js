import React, {useEffect, useState} from 'react';
import logo from './images/image.png';
import './App.css';
import CurrentQuestion from "./CurrentQuestion";
import QuestionList from "./QuestionList";
import {apiGetQuestions} from "./api/endpoints";

function App() {

    const [questions, setQuestions] = useState([]);

    async function getQuestions() {
        setQuestions(await apiGetQuestions());
    }

    useEffect(() => {
        getQuestions()
    }, []);

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>MxM Storm panel</p>
      </header>

      <a name="current"></a>
      <CurrentQuestion updateQuestions={getQuestions}/>
      <QuestionList updateQuestions={getQuestions} questions={questions} />
    </div>
  );
}

export default App;
