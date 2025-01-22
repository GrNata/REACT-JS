import React, {useEffect, useRef, useState} from "react";

function TimerLesson() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval((setCount((prevCount) => prevCount + 1))
                                                , 1000);
            // setCount((prevCount) => prevCount + 1);
        } else {
            console.log('STOP count = ' + count + ', intervalRef = ' + intervalRef.current);
            // setCount(intervalRef.current);
            clearInterval(intervalRef.current);
        }
    }, [isRunning]);


    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setCount(0);
    };


    return (
        <div
            className="App"
            style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign: "center",
            }}
        >
            <h1>React TimerLesson</h1>
            <h2>{intervalRef.current}</h2>
            <button onClick={toggleTimer}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={resetTimer} >
                Reset
            </button>
        </div>
    );
};

export default TimerLesson