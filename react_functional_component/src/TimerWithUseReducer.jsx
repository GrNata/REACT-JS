import React, { useState, useEffect, useReducer } from "react";


const countReducer = (state, {type}) => {
    // должны быть 4 события: start, stop, reset и событие когда происходит отсчет 'TICK'
    if (type === 'START') {
        return {
            ...state,
            isCounting: true,
        }
    }
    if (type === 'STOP') {
        return {
            ...state,
            isCounting: false,
        }
    }
    if (type === 'RESET') {
        return {
            count: 0,
            isCounting: false,
        }
    }
    if (type === 'TICK') {
        return {
            ...state,
            count: state.count + 1,     //   к предыдущему значению count прибавляет 1
        }
    }

    return state;
};


function setDefaultValue() {
    const userCount = localStorage.getItem('count');
    return userCount ? +userCount : 0;      //  +userCount - '+' преобразоваие в число
};

export default function TimerWithUseReducer() {

    const [{count, isCounting}, dispatch] = useReducer(countReducer, {count: setDefaultValue(), isCounting: false});

    useEffect(() => {
        // console.log('UPDATE: count = ' + count);
        localStorage.setItem('count', count);

    }, [count]);

    useEffect(() => {
        let timerId = null;
        if (isCounting) {
             timerId = setInterval(() => {
                dispatch({type: 'TICK'});     // вызываем событие при работе таймера
            }, 1000);
        }

        // при изменении значения isCounting выполнится return
        return () => {
            console.log('UNMOUNT: count = ' + count);
            // 
            timerId && clearInterval(timerId);    // проверка, если timerI - ничего нет (очистка не нужна)
            timerId = null;
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
                    <button onClick={() => dispatch({type: 'START'})}>Start</button>    
                ) : (
                    <button onClick={() => dispatch({type: 'STOP'})}>Stop</button>
                )}
                <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
            </div>
        );

        // создаем одну ф-цию dispatch, в которую передаем события, 
        // а как эти события обрабатываются - countReducer (скрыты в Reducer)
    
}