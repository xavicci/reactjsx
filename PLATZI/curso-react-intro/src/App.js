import { useState } from 'react';
import { CreateTodoButton, TodoSearch, TodoList, TodoItem, TodoCounter } from './Components/';

const defaultTodos = [
  { id: 1, text: 'Ir a trabajar', completed: true },
  { id: 2, text: 'Ir a almorzar', completed: false },
  { id: 3, text: 'Salir a pasear', completed: true },
  { id: 6, text: 'Salir a ver pelis', completed: true },
  { id: 4, text: 'Ver pelis', completed: false },
  { id: 5, text: 'Estudiar', completed: false },
]

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => (todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

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
          onComplete={()=>completeTodo(text)}
          onDelete={()=>deleteTodo(text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>

  );
}

export default App;
