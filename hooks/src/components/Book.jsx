// для использования ф-ций addBook  и removeBook
import React, { useContext } from "react";
import { CustomContextMy } from '../Context'

// вытаскиваем книгу через Context

export function Book(props) {
    // вытаскиваем removeBook
    const {removeBook} = useContext(CustomContextMy);    

    // при клике на книгу она удаляется
    return <h2 onClick={() => removeBook(props.id)}>
                {props.title}
            </h2>;
}

// или так
// export function Book({title}) {
//     return <div>
//             <h2>{title}</h2>
//         </div>;
// }