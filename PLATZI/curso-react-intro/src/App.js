import { CreateTodoButton, TodoSearch, TodoList, TodoItem, TodoCounter } from './Components/';

const defaultTodos = [
  { id: 1, text: 'Ir a trabajar', completed: true },
  { id: 2, text: 'Ir a almorzar', completed: false },
  { id: 3, text: 'Salir a pasear', completed: true },
  { id: 4, text: 'Ver pelis', completed: false },
  { id: 5, text: 'Estudiar', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter completed={5} total={10} />
      <TodoSearch />

      <TodoList>
        {/* console.log(object) */}
        {defaultTodos.map(({id,text,completed}) => (
          <TodoItem
            key={id}
            actividad={text}
            completed={completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>

  );
}

export default App;
