import React, { useReducer } from "react";

// сама ф-ция reducer, принимает state и принимает action (состояние, некое действие)
// как правило action некий объект -> action = {type, payload}  или {type} (в данном случае), мб еще 2-а ключа
const reducer = (state, action) => {
    switch ( action.type ) {
        case "INCREMENT_R":
            return{
                ...state,
                r: Math.min(state.r + 30, 255)
            };
        case "DECREMENT_R":
            return{
                ...state,
                r: Math.max(state.r - 30, 0)
            };
        case "INCREMENT_G":
            return{
                ...state,
                g: Math.min(state.g + 30, 255)
            };
        case "DECREMENT_G":
            return{
                ...state,
                g: Math.max(state.g - 30, 0)
            };
        case "INCREMENT_B":
            return{
                ...state,
                b: Math.min(state.b + 30, 255)
            };
        case "DECREMENT_B":
            return{
                ...state,
                b: Math.max(state.b - 30, 0)
            };
        default:
            return state;
        }
    };

export function Reducer() {
    // reducer - ф-ция - 
    // 1-ый параметр {r: 0, g: 150, b:200} - некий state, начальные значения
    // 2-ой параметр - reducer (dispatch) - ф-ция
    //reducer принимает событие,  в данном случае их 6 (кнопки ф-ция dispatch)
    // и возвращаает новый state c нновыми значениями {r, g, b} и ф-цию dispatch
    const [{r, g, b}, dispatch] = useReducer(reducer, {r: 0, g: 150, b:200});

    return (
        <div className="Reducer">
            <h1
                style={{color: `rgb(${r}, ${g}, ${b})`}}
            >
                Hello CodeSandbox 
            </h1>
            <div>
                <span>R: </span>
                <button onClick={() => dispatch ({type: "INCREMENT_R"})}> + </button>
                {/* для передачи данных используют ключ payload */}
                {/* <button onClick={() => dispatch ({type: "INCREMENT_R", payload: 1})}> + </button> */}
                <button onClick={() => dispatch ({type: "DECREMENT_R"})}> - </button>
            </div>
            <div>
                <span>G: </span>
                <button onClick={() => dispatch ({type: "INCREMENT_G"})}> + </button>
                <button onClick={() => dispatch ({type: "DECREMENT_G"})}> - </button>
            </div>
            <div>
                <span>B: </span>
                <button onClick={() => dispatch ({type: "INCREMENT_B"})}> + </button>
                <button onClick={() => dispatch ({type: "DECREMENT_B"})}> - </button>
            </div>

        </div>
    );
}