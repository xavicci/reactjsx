import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description: 'Recolectar la piedra del alma',
        //     done: false,
        // },
    ]

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        console.log(todos);
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

    return (
        <>
            <h1>TodoApp 10, <small>pendientes:2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
};