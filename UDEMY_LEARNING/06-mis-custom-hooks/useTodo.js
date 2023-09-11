import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

export const useTodo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const initialState = []

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        // console.log(todos);
        localStorage.setItem('todos', JSON.stringify(todos) || []);


    }, [todos]);

    const handleNewTodo = (todo) => {
        // console.log({ todo });

        const actionAdd = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(actionAdd);

    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    }

    const todosCount = () => {
        return todos.length
    }

    const pendingTodosCount = () => {
        return todos.filter(todo => !todo.done).length
    }

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
