/* 
uso del useRef

Referencia a elementos del DOM: Puedes usar useRef para obtener una referencia a un elemento del DOM para poder interactuar con él directamente. Por ejemplo, si deseas enfocar un campo de entrada después de montar el componente, puedes hacerlo usando useRef para obtener una referencia al elemento y luego usar focus() para enfocarlo.

Mantener valores mutables: A diferencia del estado (useState), los cambios en el valor de un objeto useRef no provocan una re-renderización del componente. Esto es útil cuando necesitas almacenar valores que cambian pero no afectan la interfaz de usuario y no desencadenan actualizaciones visuales.

Persistir valores entre renderizaciones: Los valores almacenados en useRef no se ven afectados por las re-renderizaciones del componente. Esto puede ser útil, por ejemplo, cuando necesitas mantener un valor o contador que debe persistir a lo largo del ciclo de vida del componente.
 */

import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClickRef = () => {
        inputRef.current.select();
    }

    return (

        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                // ref es una palabra clave reservada
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre .."
                className="form-control"
            />

            <button
                onClick={onClickRef}
                className="btn btn-primary mt-2">
                Set focus
            </button>
        </>
    )
}
