import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);
    // console.log(algo, 123);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre aria-label='pre'>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                onClick={() => setUser({ id: 123, name: 'xavi', email: 'xa_franc' })}
                className='btn btn-primary'
            >
                Establecer usuario
            </button>
        </>
    )
}
