import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const { setUser } = useContext(UserContext);
    // console.log(algo, 123);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <button
                onClick={() => setUser({ id: 123, name: 'xavi', email: 'xa_franc' })}
                className='btn btn-primary'
            >
                Establecer usuario
            </button>
        </>
    )
}
