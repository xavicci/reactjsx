import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { formState, onInputChange,onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });

    // const { username, email, password } = formState;

    // useEffect es usado para disparar efecto secundarios
    // useEffect(() => {
    //     // console.log("useEffect Changed!")
    // }, []);

    // useEffect(() => {
    //     // console.log("formstate changed!")
    // }, [formState]);

    // useEffect(() => {
    //     // console.log("username changed!")
    // }, [username]);

    // useEffect(() => {
    //     // console.log("email changed!")
    // }, [email]);

    return (
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

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button
                onClick={onResetForm}
                className="btn btn-primary mt-4">
                Borrar
            </button>
        </>

    )
}