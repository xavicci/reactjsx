import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from "./";


export const MultipleCustomHooks = () => {

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
                Next quote
            </button>
        </>
    )
}
