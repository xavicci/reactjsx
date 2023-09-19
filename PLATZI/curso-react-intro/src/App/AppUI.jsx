import React from 'react'
import { CreateTodoButton, TodoSearch, TodoList, TodoItem, TodoCounter,TodosLoading,TodosError,EmptyTodos } from '../Components';
import { TodoContext } from '../Context/TodoContext';
import { Modal } from '../Components/Modal/Modal';


export const AppUI = () => {

    const {
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
    }=React.useContext(TodoContext);
 
    return (
        <>
          <TodoCounter />
          <TodoSearch />
          <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length==0) && <EmptyTodos />}
  
          {searchedTodos.map(({ id, text, completed }) => (
          <TodoItem
              key={id}
              actividad={text}
              completed={completed}
              onComplete={() => completeTodo(text)}
              onDelete={() => deleteTodo(text)}
          />
          ))}
          </TodoList>
          <CreateTodoButton />

          {openModal && (
            <Modal>
              La funcionalidad de agregar TODOS!
            </Modal>
          )}

        </>
    
      );
}