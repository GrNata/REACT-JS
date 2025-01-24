// в отличии от useEffect (асинхронный) является синхронным
// в 99% случаев надо использовать useEffect (быстрее)

import React, { useState, useLayoutEffect, useEffect } from "react";
// при нажатии на кнопку пытаемся обнулить value
// 1 вариант - useEffect
// 2 вариант - useLayoutEffect

export const LayoutEffect = () => {
    const [value, setValue] = useState(0);

    // 1 вариант

    // useEffect(() => {
    //     // изначально 0 -> if (value (на кнопке) = некое число -> перерендер(return) (изменение value)) 
    //     // -> нажатии на кнопку (value = 0) -> опять перерендер - 0 -> if (value (на кнопке) - и по кругу
    //     // те отрисовка кнопки два раза (очень быстро) сначсало - 0, за тем число
    //     if (value === 0) {
    //         setValue(10 + Math.random() * 200);
    //     }
    // }, [value]);

// 2 вариант

    useLayoutEffect(() => {
        // начинает работать до того как наш виртульный DOM вносит изменения в браузерный DOM
        // между этим процессом - начинает рабботать useLayoutEffect, и если он требует обновить какие-то наши значения,
        //  который тоже должны превести к рендеру, то повторный рендер тоже будет

        // использовать useLayoutEffect - когда принудительно надо лезть в обычный DOM и что-то там поменять

        if (value === 0) {
            setValue(10 + Math.random() * 200);
        }
    }, [value]);

    console.log('render value = ' + value);

    return <button onClick={() => setValue(0)}>
                {value}
            </button>
};
