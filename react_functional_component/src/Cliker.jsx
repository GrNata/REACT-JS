import React, {useState, useEffect} from "react";

function Cliker() {
    const [count, setCount] = useState(0);

    const [loading, setLoading] = useState(false);

const increment = () => {
  setCount(count + 1);
}

const decrement = () => {
  setCount(count - 1);
}

// при загрузке (монтировании) - []
useEffect(() => {
    console.log('First - Hello from Cliker!');
}, []);


// при условии - изменение count
useEffect(() => {
    console.log('Update - Hello from Cliker. count = ' + count);

    return () => console.log('Goodbay Cliker! - срабатывает при размонтировании ')
}, [count]);




  return (
    <div className="App">
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
      <button onClick={decrement}> - </button>
      <span style={{display: 'inline-block', margin: '0 0.5rem'}}>{count}</span>
      <button onClick={increment}> + </button>
    </div>
  );
}

export default Cliker;