import React, { useState, useEffect } from "react";

export const State = () => {
// state в виде объекта - здесь setState, не тот что ф-ция setSatet()
    const [state, setState] = useState({
        count: 0,
        isCount: false,
    });


    // const [value, setValue] = useState(() => {
    //     const userCount = localStorage.getItem('count');
    //     return +userCount || 0;     //  вернет преобразованное в число из localStorage и если там ничего нет - 0
    // });

    // setValue((prevValue) => {   return prevValue + 1;   })

    const handleCount = () => {
        setState({
            ...state,     //  взять объект state и обновить у него count (для объектов)
            count: state.count + 1});
    };

    const handleStatus = () => {
        setState({
            ...state,
            isCount: !state.isCount
        });
    };

    useEffect(() => {
        console.log('state = ' + state + ', count = ' + state.count + ', isCount = ' + state.isCount);
    }, [state]);


    return <div>
        <button onClick={handleCount}>click</button>
        <button onClick={handleStatus}>me too</button>
        </div>
};