import React, { useEffect, useRef, useState } from "react";

const WithRef = () => {
    // const inputEl = useRef(null);
    // console.log('Ref: inputEl = ' + inputEl);

    const numRef = useRef(0);
    const [count, setCount] = useState(0);


    const handleClick = () => {
        // numRef.current = 1;

        // // прибаляет только одну 1
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // такой вариант прибаляет 3
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        // console.log('Ref (useEffect): inputEl = ' + inputEl);
        // console.log('Ref (useEffect): numRef = ' + numRef);
        console.log('Ref (useEffect): count = ' + count);
    });

    return (
        <div>
            {/* <input placeholder="name" ref={inputEl} /> */}
            <button onClick={handleClick}>
                {/* {numRef.current} */}
                {count}
            </button>
        </div>
    )
};

export default WithRef