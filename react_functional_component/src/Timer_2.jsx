import React, { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    // useEffect(() => {
    //     // const countUser = localStorage.getItem("timer");
    //     // console.log("Компонент был смонтирован localStorage.getItem countUser = " + countUser);

    //     // if (countUser != null) {
    //         // this.setState({ count: parseInt(countUser, 10) }, () => {
    //         //     console.log(
    //         //         "Компонент (есть) localStorage.getItem count = " + count
    //         //     );
    //         // );
    //         // });
    //         // setCount(parseInt(countUser, 10));
    //         // setCount(parseInt(localStorage.getItem("timer"), 10));
    //         // console.log("Компонент (есть) localStorage.getItem count(=countUser) = " + count);
    //         // }
    // }, []);

    useEffect(() => {
        console.log("UPDATE - Компонент (есть) localStorage.getItem count(=countUser) = " + count);
        localStorage.setItem("timer", count);
        // console.log("Компонент componentDidUpdate localStorage.setItem = " + localStorage.getItem("timer"));
        console.log('UPADETE - isRUnning = ' + isRunning);

    
    }, [count]);

    useEffect(() => {
        if (isRunning) {
            console.log("useEffect TRUE - состояние isRunning before = " + isRunning);
            stopTimer();
        } else {
            console.log("useEffect FALSE - состояние isRunning before = " + isRunning);
            startTimer();
        }

        return () => {
            stopTimer();
            console.log("Компонент был размонтирован");
        };
    }, [isRunning]);
    
    const toggleTimer = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
        console.log("toggleTimer - состояние isRunning after = " + isRunning);
    };

    const startTimer = () => {
        console.log('START TIMER count = ' + count + ', isRuning = ' + isRunning);
        setInterval(() => setCount(count + 1), 1000);
        // setTimerId(setInterval(() => {
        //     // this.setState(prevStat => ({count: prevStat.count + 1}));
        //     setCount(count + 1)
        // }, 1000)
        // );
        // timerId = setInterval(() => {
        //     // this.setState(prevStat => ({count: prevStat.count + 1}));
        //     setCount(count + 1);
        // }, 1000);
        // localStorage.setItem("timer", count);
        console.log("Таймер запущен lcount = " + count + ', isRuning = ' + isRunning);
    };

    const stopTimer = () => {
        // clearInterval(timerId);
        console.log("Таймер остановлен");
    };

    const reset = () => {
        stopTimer();
        // this.setState({count: 0, isRunning: false});
        setCount(0);
        setIsRunning(false);
        // localStorage.removeItem("timer");
        console.log("Состояние сброшено");
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
            <h1>React Timer</h1>
            <h2>{count}</h2>
            <button onClick={toggleTimer}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Timer
