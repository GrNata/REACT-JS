// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import Cliker from "./Cliker";
import TimerWithClassState from "./TimerWithClassState";
import Timer from "./Timer";
import Ref from './Ref';
import TimerLesson from './TimerLesson';
import TimerWithUseReducer from './TimerWithUseReducer'

function App() {
    const [isCliker, setCliker] = useState(false);
    const [isTimerClass, setTimerClass] = useState(false);
    const [isTimer, setIsTimer] = useState(false);
    const [isRef, setIsRef] = useState(false);
    const [isTimerLesson, setIsTimerLesson] = useState(false);
    const [isTimerWithUseReducer, setIsTimerWithUseReducer] = useState(false);

    return (
        <div className="App">
            <h2>React App</h2>
            
            <button onClick={() => setCliker(!isCliker)}>Toggle Cliker</button>
            {isCliker && <Cliker />}

            <button onClick={() => setTimerClass(!isTimerClass)}>Timer Class</button>
            {isTimerClass && <TimerWithClassState />}

            <button onClick={() => setIsTimer(!isTimer)}>Start Timer</button>
            {isTimer && <Timer />}

            <button onClick={() => setIsRef(!isRef)}>Start Ref</button>
            {isRef && <Ref />}

            <button onClick={() => setIsTimerLesson(!isTimerLesson)}>Start Timer Lesson</button>
            {isTimerLesson && <TimerLesson />}
            
            <button onClick={() => setIsTimerWithUseReducer(!isTimerWithUseReducer)}>Start Timer with useReducer</button>
            {isTimerWithUseReducer && <TimerWithUseReducer/>}
        </div>
    );
}

export default App;
