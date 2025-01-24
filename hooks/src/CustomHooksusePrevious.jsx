// создаем собственный хук - Previous

//  ф-ция создает ref, который = null, но в тот момент когда приходит (ф-ция принимает) значение (value)
// ф-ция вызывается повторно, отрабатывает useEffect, который значение - ref изменяет на value
// и возвращает измененное состояние наружу

import React, { useRef, useEffect } from "react";

export function usePrevious(value) {
    const ref = useRef();       // .current = null -  при инциализации null

    useEffect(() => {
        ref.current = value;        //  при повторном вызове
    });

    return ref.current;
}




