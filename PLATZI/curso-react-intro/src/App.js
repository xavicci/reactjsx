import { CreateTodoButton,TodoSearch,TodoList,TodoItem,TodoCounter } from './Components/';
import './App.css';

const defaultTodos = [
  {id:1,text: 'Ir a trabajar', Completed: true},
  {id:2,text: 'Ir a almorzar', Completed: false},
  {id:3,text: 'Salir a pasear', Completed: true},
  {id:4,text: 'Ver pelis', Completed: false},
  {id:5,text: 'Estudiar', Completed: false},
]

function App() {
  return (
  <>
        <TodoCounter completed = {5} total={10}/>
        <TodoSearch />

        <TodoList>
          {defaultTodos.map(({id,text,Completed}) => (
            <TodoItem key={id} actividad ={text} valor = {Completed} />
          ))}
        </TodoList>

        <CreateTodoButton />
  </>
   
  );
}

export default App;
