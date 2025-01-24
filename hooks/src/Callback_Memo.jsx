// import { useCallback } from 'react';

// // передаем в useCallback некую ф-цию, и набор зависимостей
// //  когда параметры - [productId, referrer] - меняются, происходит мемонизорованный перерасчет ф-ции 
// // и сохраняется в некое кешированное пространство новый вариант ф-ции с другими параметрами
// // - useCallback - возвращает Ф_ЦИЮ (не вызывает!!)
//   export function ProductPage({ productId, referrer, theme }) {

//   const handleSubmit = useCallback((orderDetails) => {      //  ф-ция ((orderDetails) => {...} )
//     post('/product/' + productId + '/buy', {
//       referrer,
//       orderDetails,
//     });

//   }, [productId, referrer]);        //      набор зависимостей



// //   useMemo
// // как и Callback, принимает некую ф-ци и примает вторым аргументом массив зависимостей
// // когда один из элементов зависимостей изменился, происходит перерасчет ф-ции и возвразается мемонизированное значение
// // useMemo - возвращает ЗНАЧЕНИЕ (не ф-цию!!)
// // Использовать лучше: для больших вычислений, к примеру факториал один раз вычислили и использовать, 
// //          перерасчет только при изменении параметров
// import { useMemo } from 'react';

// function TodoList({ todos, tab }) {

//   const visibleTodos = useMemo(
//     () => filterTodos(todos, tab),      //  некая ф-ция
//     [todos, tab]        //  массив зависимостей
//   );
//   // ...
// }

// useMemo и useCallbac занимают место в памяти и не всегда хорошо
// для чего-то простого нет смысда, а для больших вычислений есть


// ПРИМЕР
import React, {useState, useCallback} from "react";

//  за счет React.memo и useCallback идет предотвращение повторного рендера в случае когда пришли теже самые данные
const CountButton = React.memo(({onClick, count}) => {
// function CountButton({onClick, count}) {

    console.log('render count = ' +count);

    return <button onClick={onClick}>{count}</button>
});

export function DualCounter() {
    const [count1, setCount1] = useState(0);
    // const increment1 = () => setCount1(c => c + 1);
    // за мемонизируем ф-цию
    const increment1 = useCallback( () => setCount1(c => c + 1), []);
    
    const [count2, setCount2] = useState(0);
    // const increment2 = () => setCount2(c => c + 1);
    const increment2 = useCallback(() => setCount2(c => c + 1), []);

    return (
        // при нажатии на любую кнопку происходит два рендера с count1 и с count2
        <>
            <CountButton count={count1} onClick={increment1} />
            <CountButton count={count2} onClick={increment2} />
        </>
    )
}