import './App.css';
import React, { useState, useEffect } from 'react';
import Data from './data.js';
import ShowScore from './components/ShowScore.js';
import ShowGerman from './components/ShowGerman.js';

function App() {
  const [state, setState] = useState([]);
  const [chosenIndex, setChosenIndex] = useState();
  const [sessionStarted, setSessionStarted] = useState(false);
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    const vocs = Data.map((el) => {
      el.score = 0;
      return el;
    });
    setState(vocs);
  }, []);
  useEffect(() => {
    if (chosenIndex !== undefined) {
      if (state.filter(el => el.score === 3).length === state.length) {
        setSessionStarted(!sessionStarted);
        setChosenIndex();
        const vocs = Data.map((el) => {
          el.score = 0;
          return el;
        });
        setState(vocs);
      } else {
        let newIndex = Math.floor(Math.random() * state.length);
        while (state[newIndex].score === 3) {
          newIndex = Math.floor(Math.random() * state.length);
        }
        setChosenIndex(newIndex);
      }
    }
  }, [state]);
  const startSession = () => {
    let index = Math.floor(Math.random() * state.length);
    setChosenIndex(index);
    setSessionStarted(!sessionStarted);
  }
  const checkResult = (e) => {
    if (answer === state[chosenIndex].english) {
      const newState = state.map((el, ind) => {
        if (ind === chosenIndex) {
          return {...el, score: state[chosenIndex].score + 1}
        } else {
          return el;
        }
      })
      setState(newState);
      // let newIndex = Math.floor(Math.random() * state.length);
      // while (state[newIndex].score === 3) {
      //   newIndex = Math.floor(Math.random() * state.length);
      // }
      // setChosenIndex(newIndex);
    } else {
      console.log("wrong");
    }
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Vocabulary Trainer</h1>
      <div className="container">
        <ShowScore scoreData={state} />
        <ShowGerman vocabulary={state[chosenIndex]?.german} />
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
