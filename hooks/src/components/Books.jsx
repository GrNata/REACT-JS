import { Book } from './Book';
import React, { useContext } from 'react';
import { CustomContextMy } from '../Context';

export function Books() {
    // используя useContext можем сделать дестроктуризацию
    const { books = [] } = useContext(CustomContextMy); // можем вытащить любую сущность (value) переданную в Provider 
    console.log("loading books = " + books);

    if (!books || books.length === 0) {
        console.log('No books');
        return <div>No books</div>
    }

    return <div className='books'>
        {
            // пройдем по всем книгам, key-обязательно, и передадим все что есть в books
            books.map((book) => {
                return <Book key={book.id} {...book} />
            })
        }
    </div>
}

    // <div className='books'>
    //     {
    //         // пройдем по всем книгам, key-обязательно, и передадим все что есть в books
    // если использовать ( ) - вместо { }, тогда без return
    //         books.map((book) => (
    //             <Book key={book.id} {...book} />
    //         ))
    //     }
    // </div>