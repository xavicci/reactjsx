import React, { useEffect, useState } from 'react';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'xavicci@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState, [name]: (value)
        });
    }

    // useEffect es usado para disparar efecto secundarios
    useEffect(() => {
        console.log("useEffect Changed!")
    }, []);

    useEffect(() => {
        console.log("formstate changed!")
    }, [formState]);

    useEffect(() => {
        console.log("username changed!")
    }, [username]);

    useEffect(() => {
        console.log("email changed!")
    }, [email]);

    return (
        <div>
            <>
                <h1>Simple Form</h1>
                <hr />

                <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese nombre"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />

                <input
                    type="email"
                    className="form-control mt-2"
                    placeholder="correo@mail.com"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />
            </>
        </div>
    )
}


