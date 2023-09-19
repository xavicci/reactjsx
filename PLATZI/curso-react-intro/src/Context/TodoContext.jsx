import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const TodoContext =React.createContext();

export const TodoProvider = ({children}) => {

    const {
        item:todos,
         saveItem:saveTodos,
         loading,
         error} = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = useState('');
      const [openModal, setOpenModal] = useState(true);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
    
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(
        (todo) => (todo.text.toLowerCase().includes(searchValue.toLowerCase()))
      );
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    return(
        <TodoContext.Provider 
        value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

