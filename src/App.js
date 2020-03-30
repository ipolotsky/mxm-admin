import React from 'react';
import logo from './images/image.png';
import './App.css';
import CurrentQuestion from "./CurrentQuestion";
import QuestionList from "./QuestionList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>MxM Storm panel</p>

        <CurrentQuestion/>

        <h3>Questions:</h3>
        <QuestionList/>

      </header>
    </div>
  );
}

export default App;
