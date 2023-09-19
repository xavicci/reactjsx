import React from 'react';
import './styles/TodoCounter.css';
import { TodoContext } from '../Context/TodoContext';

export const TodoCounter = () => {
    const {
        completedTodos,
        totalTodos,
    }=React.useContext(TodoContext);

    return (
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodos} </span>
            de <span>{totalTodos}</span> TODOS
        </h1>
    );
}
