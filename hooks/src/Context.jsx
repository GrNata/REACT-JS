// родился для пробрассывания props на уровни (например с 1 на 10)
import React, { createContext, useState } from "react";

export const CustomContextMy = createContext();
// CustomContext (CustomContextMy) имеет два ключа: Consumer и Provider
// их можно использовать оба или по одному

export const ContextMy = (props) => {     // Contex (ContextMy) - любое имя
    // есть массив книг -> пробрасывать вниз (добавлять и удалять книги по необходимости)
console.log('ContextMy !!!');

    const [books, setBooks] = useState([
        {id: 1, title: 'Book-1'},
        {id: 2, title: 'Book-2'},
        {id: 3, title: 'Book-3'},
    ]);

    // CustomContextMy и ContextMy - неодно и тоже

    const addBook = (book) => {
// создать новый массив, положить туда объект новой книги book и положи все существующие книги
        setBooks([book, ...books])  //  новая книга добавится первой ( при смене порядка - последней)
    }

    const removeBook = (id) => {
        // берем весь массив книг, применим фильтрацию (оставим только те где book.id != id)
        setBooks(books.filter(book => book.id !== id))
    }

    // вопрос - как любому компоненту дать доступ к ф-циям addBook и removeBook?
    // CustomContext  (с Provider) будет помагать
    // CustomContext.Provider - будем оборачивать все, что придет через props.children
    // props.children - особвый props, где хранятся дочерние эл-ты, если они были переданы
    // CustomContext в дальнейшем подключим на другие уровни приложения и все они будут дочерними к нему
    // все дочерние компоненты будут получать доступ к тому, что положили в value(мб числоБ строкаБ переменная с сущностью (объект))
    
    const value = { //  может внешний (как здесь) или внутри
        books,
        addBook,
        removeBook
    };
    
    // return <CustomContext.Provider value={{books, addBook, removeBook}}>
    return <CustomContextMy.Provider value={value}>
                {props.children}
            </CustomContextMy.Provider>

}
