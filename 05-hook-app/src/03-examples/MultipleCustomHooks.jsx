import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);


    // console.log({ data, isLoading, hasError })

    const { quote, author } = !!data && data[0]



    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
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
