// este hook useMemo hace que el component/funcion se vuelva a renderizar si y solo si su lista de dependencia cambia "counter", caso contrario no se renderiza aunque el resto sí.

import { useState, useMemo } from "react";
import { useCounter } from "../hooks"


export const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('ahi vamos...')
    }

    return `${iterationNumber} iteracion realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(10);

    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: {counter} </h1>

            <h4>{memorizedValue}</h4>

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
};