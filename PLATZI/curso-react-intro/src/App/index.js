import { useState } from 'react';
import { CreateTodoButton, TodoSearch, TodoList, TodoItem, TodoCounter } from '../Components';
import { useLocalStorage } from './useLocalStorage';


// const defaultTodos = [
//   { id: 1, text: 'Ir a trabajar', completed: true },
//   { id: 2, text: 'Ir a almorzar', completed: false },
//   { id: 3, text: 'Salir a pasear', completed: true },
//   { id: 6, text: 'Salir a ver pelis', completed: true },
//   { id: 4, text: 'Ver pelis', completed: false },
//   { id: 5, text: 'Estudiar', completed: false },
// ]

// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1');

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');


  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const totalTodos = todos.length;

  console.log('Log 1');
  console.log('Log 2');
  console.log('Log 3');
  console.log('Log 4');
  console.log('Log 5');

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

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {/* console.log(object) */}
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
    </>

  );
}

export default App;
