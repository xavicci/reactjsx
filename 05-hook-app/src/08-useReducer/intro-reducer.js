// no debemos hacer Push xq luego mutamos nuestro elemento y que pasa ? puedes no se renderiza debido a que su referencia no cambia.

// En el caso de usar useReducer en React, se recomienda evitar mutar directamente el objeto del estado anterior dentro del reducer. Esto se debe a que React detecta los cambios en el estado mediante comparaciones de referencia (shallow comparison), y si el estado mutado tiene la misma referencia que el estado anterior, React asumirá que el estado no ha cambiado y no realizará una re-renderización del componente. Como resultado, los cambios en el estado podrían no reflejarse en la interfaz de usuario.

// En cambio, cuando utilizas useReducer, se debe seguir una convención de inmutabilidad, lo que significa que debes crear una copia del estado anterior y modificar la copia en lugar de mutar el estado original. Esto garantiza que React pueda detectar el cambio correctamente y realizar la re-renderización del componente según corresponda.

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
},];

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
};

let todos = todoReducer(); //necesita un inicializador

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos }); 