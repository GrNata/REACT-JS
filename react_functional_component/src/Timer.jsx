import React, { useState, useEffect, useRef } from "react";

function Timer() {
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('timer');
        return savedCount ? parseInt(savedCount, 10) : 0;
    });
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);       // хранение id интервала

    // Загружаем значение count из localStorage при монтировании компонента
    useEffect(() => {
        const saveCount = localStorage.getItem('timer');
        console.log('при монтировании: saveCount = ' + saveCount);
        if (saveCount != null) {
            const parseCount = parseInt(saveCount, 10);
            setCount(parseCount);
            console.log('при монтировании: setCount = ' + parseCount);
        }
    }, []);

    // Сохраняем значение count в localStorage при его изменении
    useEffect(() => {
        localStorage.setItem('timer', count);
        console.log('Сохраняем значение count в localStorage = ' + count);
    }, [count]);

    // Управление запуском и остановкой таймера
    useEffect(() => {
        if (isRunning) {
            console.log("UPDATE startTimer: - count = " + count + ', isRunning = ' + isRunning);
            intervalRef.current = setInterval(() => {
                setCount((prevCount) => (prevCount + 1));
                }, 1000);
        } else {
            console.log("UPDATE stopTimer: - count = " + count + ', isRunning = ' + isRunning);
            clearInterval(intervalRef.current);
        }
// Очистка интервала при размонтировании компонента
        return () => clearInterval(intervalRef.current);

    }, [isRunning]);


    const toggleTimer = () => {
        console.log('toggleTimer: count = ' + count + ', isRunning = ' + isRunning + ', localStogage = ' +localStorage.getItem('timer'));
        setIsRunning(!isRunning);

        if (localStorage.getItem('timer') === null) {
            localStorage.setItem('timer', 0);
            console.log('0 - localStorage = ' + localStorage.getItem('timer'));
        }
    }

    const resetTimer = () => {
        setIsRunning(false);
        setCount(0);
        localStorage.setItem('timer', 0);
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
            <button onClick={resetTimer} >
                Reset
            </button>
        </div>
    );
}

export default Timer;
