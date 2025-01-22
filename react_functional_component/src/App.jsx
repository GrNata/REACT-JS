// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import Cliker from "./Cliker";
import Timer from "./Timer";

function App() {
    const [isCliker, setCliker] = useState(false);
    const [isTimer, setIsTimer] = useState(false);

    return (
        <div className="App">
            <h2>React App</h2>
            <button onClick={() => setCliker(!isCliker)}>Toggle Cliker</button>
            {isCliker && <Cliker />}
            <button onClick={() => setIsTimer(!isTimer)}>Start Timer</button>
            {isTimer && <Timer />}
        </div>
    );
}

export default App;
