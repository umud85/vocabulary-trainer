import './App.css';
import React, { useState, useEffect } from 'react';
import Data from './data.js';
import Score from './components/Score.js';
import German from './components/German.js';
import English from './components/English.js'

function App() {
  const [state, setState] = useState({
    base: [...Data],
    step1: [],
    step2: [],
    finished: [],
  });
  const [chosenPair, setChosenPair] = useState({});
  const [currentVoc, setCurrentVoc] = useState("");
  const [sessionStarted, setSessionStarted] = useState(false);
  const [answer, setAnswer] = useState("");
  useEffect(() => {

  }, []);
  const startSession = () => {
    const index = Math.floor(Math.random() * state.base.length);
    setChosenPair(state.base[index]);
    setCurrentVoc(state.base[index].german);
    setSessionStarted(true);
  }
  const checkResult = (e) => {
    if (answer === chosenPair.english) {
      setState({
        ...state,
        base: state.base.filter((el, ind) => {
          return el !== chosenPair;
        }),
        step1: [...state.step1, chosenPair],
      });
    } else {
      console.log("wrong");
    }
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Vocabulary Trainer</h1>
      <div className="container">
        <Score scoreData={state} />
        <German vocabulary={currentVoc} />
        <form onSubmit={checkResult}>
          <label htmlFor="answer">Answer</label>
          <input
            type="text"
            name="answer"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          { !sessionStarted &&
            <button onClick={startSession}>Start</button>}
          {sessionStarted && 
          <input type="submit" /> }
        </form>
      </div>
    </div>
  );
}

export default App;
