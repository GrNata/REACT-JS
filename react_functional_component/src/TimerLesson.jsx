import React, { useState, useEffect, useRef } from "react";

function setDefaultValue() {
    const userCount = localStorage.getItem('count');
    return userCount ? +userCount : 0;      //  +userCount - '+' преобразоваие в число
};

export default function TimerWithClassState() {
    const [count, setCount] = useState(setDefaultValue());
    const [isCounting, setIsCount] = useState(false);
    const timerIdRef = useRef(null);

    // console.log('RENDER');

    const handleReset = () => {
        setCount(0);
        setIsCount(false);
    };

    const handleStart = () => {
        setIsCount(true);
    };

    const handleStop = () => {
        // clearInterval(timerIdRef.current);
        setIsCount(false);
    };

    useEffect(() => {
        // console.log('UPDATE: count = ' + count);
        localStorage.setItem('count', count);

    }, [count]);

    useEffect(() => {
        if (isCounting) {
             timerIdRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);     // динамически увеличение на 1
            }, 1000);
        }

        // при изменении значения isCounting выполнится return
        return () => {
            console.log('UNMOUNT: count = ' + count);
            timerIdRef.current && clearInterval(timerIdRef.current);    // проверка, если timerIdRef.current - ничего нет (очистка не нужна)
            //  или handleStop();
            timerIdRef.current = null;
        };
    }, [isCounting]);

   
        return (
            <div
                className="Timer"
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    textAlign: "center",
                }}
            >
                <h1>React Timer</h1>
                <h2>{count}</h2>
                {!isCounting ? (
                    <button onClick={handleStart}>Start</button>    
                ) : (
                    <button onClick={handleStop}>Stop</button>
                )}
                <button onClick={handleReset}>Reset</button>
            </div>
        );
    
}