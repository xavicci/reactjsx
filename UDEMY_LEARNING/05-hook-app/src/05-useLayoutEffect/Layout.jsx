/* useLayoutEffect es otro hook en React que se utiliza para realizar efectos secundarios después de que las actualizaciones del DOM han sido realizadas, pero antes de que el navegador complete el repintado (repaint) y el diseño (layout) de la página. Se ejecuta de manera síncrona después de todas las mutaciones del DOM, pero antes de que el navegador actualice la pantalla.

La principal diferencia entre useLayoutEffect y useEffect es el momento en que se ejecutan:

useLayoutEffect: Se ejecuta de manera síncrona después de cada renderizado del componente, justo antes de que el navegador actualice la pantalla. Esto significa que si hay cambios en el DOM realizados dentro de useLayoutEffect, serán visibles para el usuario antes de que la pantalla se actualice. Esto puede ser útil cuando necesitas medir o interactuar con el DOM después de una actualización pero antes de que se muestre al usuario.

useEffect: Se ejecuta de manera asíncrona después de que el renderizado ha sido completado y el navegador ha actualizado la pantalla. Esto significa que los cambios en el DOM realizados dentro de useEffect no serán visibles para el usuario hasta después de que la pantalla se haya actualizado. Es útil cuando deseas realizar tareas que no afectan la interfaz de usuario directamente, como peticiones a una API o actualizaciones de estado que no deben reflejarse inmediatamente en la interfaz. 

REVISAR <Quote /> allí se implemento useLayoutEffect
*/


import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from "../03-examples";


export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    // console.log({ data, isLoading, hasError })

    const { quote, author } = !!data && data[0]

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                isLoading ?
                    <LoadingQuote />
                    : <Quote quote={quote} author={author} />
            }
            <button
                onClick={() => increment()}
                disabled={isLoading}
                className="btn btn-primary">
                Nex quote
            </button>
        </>
    )
}
