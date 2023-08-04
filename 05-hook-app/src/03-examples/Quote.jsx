
import { useState, useLayoutEffect, useRef } from "react";

export const Quote = ({ quote, author }) => {

    const quoteRef = useRef();
    const [boxsize, setBoxsize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {

        const { width, height } = quoteRef.current.getBoundingClientRect();
        setBoxsize({ width, height });

        // Aqui se ponen listener o observables
    }, [quote])

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={quoteRef} className="mb-1">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            <code>{JSON.stringify(boxsize)}</code>
        </>
    )
}
