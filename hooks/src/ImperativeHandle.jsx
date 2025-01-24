// попробовать изменить направление движения props (обычно данные передаем с низу в верх )
// useImperativeHandele - дает возможность передать сущности на верх и внизб который позволяет настраивать или изменять значения, возвращаемые ссылкой (ref)
// Передача управления "вверх": Родитель может управлять поведением дочернего компонента через рефы.
// Передача управления "вниз": Вы можете передать специфическую функциональность, доступную только внутри компонента, через ссылку (ref).


// // Пример 1: Управление дочерним компонентом из родительского
// import React, { useRef, forwardRef, useImperativeHandle } from 'react';

// // forwardRef - Используется для передачи рефа из родительского компонента в дочерний.
// const ChildComponent = forwardRef((props, ref) => {
//     const focusInput = () => {
//       alert('Input is focused!');
//     };
  
//     // useImperativeHandle связывает внешний реф с переданными методами
//     // useImperativeHandle - Позволяет определить, какие методы или свойства будут доступны через реф. 
//     // В данном примере мы предоставляем метод focusInput.
//     useImperativeHandle(ref, () => ({
//       focusInput,
//     }));
  
//     return <input type="text" />;
//   });
  

// //   Родительский компонент (ParentComponent):
// // Через childRef.current.focusInput() вызывает метод дочернего компонента.
//   export function ParentComponent() {
//     const childRef = useRef();
  
//     const handleClick = () => {
//       // Вызываем метод дочернего компонента через ref
//       childRef.current.focusInput();
//     };
  
//     return (
//       <div>
//         <ChildComponent ref={childRef} />
//         <button onClick={handleClick}>Call Child Method</button>
//       </div>
//     );
//   }


// Пример 2: Управление состоянием дочернего компонента из родительского
import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';

const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  // Передаем методы управления состоянием через ref
  useImperativeHandle(ref, () => ({
    increment: () => setCount((prev) => prev + 1),
    decrement: () => setCount((prev) => prev - 1),
  }));

  return <div>Count: {count}</div>;
});

export function ParentComponent() {
  const counterRef = useRef();

  return (
    <div>
      <Counter ref={counterRef} />
      <button onClick={() => counterRef.current.increment()}>Increment</button>
      <button onClick={() => counterRef.current.decrement()}>Decrement</button>
    </div>
  );
}

// Когда использовать useImperativeHandle
// Использование useImperativeHandle оправдано, если:

// Вам нужно предоставить родителю или другим компонентам возможность управлять состоянием или поведением 
    // дочернего компонента напрямую через ref.
// Дочерний компонент работает с нативными элементами, такими как <input>, <textarea>, 
    // или сложными пользовательскими элементами.
// Вы хотите предоставить только определенные методы или свойства через ref,
    //  скрывая остальную часть логики компонента.

//     Когда не стоит использовать useImperativeHandle
// Если можно достичь той же функциональности через пропсы или контекст (Context API).
// Если передача управления делает компонент сложным для понимания или тестирования.
// Если управление состоянием можно централизовать в родительском компоненте.