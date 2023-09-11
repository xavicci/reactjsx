// trabaja en conjunto con React.memo y sirve para memorizar funciones

import { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from './showIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)


    // const incrementFather = () => setCounter(counter + 1); //asi no funciona porque esta ubicada en una posicion de memoria diferente al tratarse de una funcion

    // const incrementFather = useCallback(() => setCounter(counter + 1), []); // así tampoco funciona porque el valor de counter queda tambien memorizado

    const incrementFather = useCallback(
        (value) => {
            setCounter(c => (c + value));
        },
        []
    ); // aquí si porque el value intermanente cambia


    // este es otro uso en caso de no usar el memo

    useEffect(() => {
        // incrementFather();
    }, [incrementFather])




    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />

        </>
    )
}
