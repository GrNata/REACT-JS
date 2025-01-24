import React, { useState, useEffect } from "react";

export const State = () => {
// state в виде объекта - здесь setState, не тот что ф-ция setSatet()
    const [state, setState] = useState({
        count: 0,
        isCount: false,
    });

    const [user, setUser] = useState({
        name: 'Name',
        age: 25,
    })


    // const [value, setValue] = useState(() => {
    //     const userCount = localStorage.getItem('count');
    //     return +userCount || 0;     //  вернет преобразованное в число из localStorage и если там ничего нет - 0
    // });

    // setValue((prevValue) => {   return prevValue + 1;   })

    const handleCount = () => {
        // для изменения не всех "свойств"
        setState({
            ...state,     //  взять объект state и обновить у него count (для объектов)
            count: state.count + 1});

        setUser({
            name: 'Ivan',
            age: 55
        });
    };

    const handleStatus = () => {
        // изменение всех "свойств"
        setState({
            ...state,
            isCount: !state.isCount
        });
        setUser({
            ...user,
            age: 30
        })
    };

    useEffect(() => {
        console.log('state: count = ' + state.count + ', isCount = ' + state.isCount);
    }, [state]);

    useEffect(() => {
        console.log('user: user = ' + user + ', name = ' + user.name + ', age = ' + user.age);
    }, [user]);

    useEffect(() => {
        console.log('[]: name = ' + user.name + ', age = ' + user.age + ', state: count = ' + state.count + ', isCount = ' + state.isCount);
    }, []);


    return <div>
        <button onClick={handleCount}>click</button>
        <button onClick={handleStatus}>me too</button>
        </div>
};