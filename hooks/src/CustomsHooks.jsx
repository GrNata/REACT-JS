import React, {useState} from "react";
import { usePrevious } from './CustomHooksusePrevious';
import { useLocalStorage } from './CustomHookLocalStorege';


export function CustomHooks() {
    // const [count, setCount] = useState(0);
    // теперь используем созданный хук
    const [count, setCount] = useLocalStorage(0, 'count');

    const prevCount = usePrevious(count);

    return (
        <div className="CustomHooks">
            <button onClick={() => setCount(count + 1)} >Update</button>
            {/* возвращает настоящее значение */}
            <h2>Current: {count}</h2>
            {/* возвращает предыдущее значение */}
            <h2>Previous: {prevCount}</h2>
        </div>
    );
}