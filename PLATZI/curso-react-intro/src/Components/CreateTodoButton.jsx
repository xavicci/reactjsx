import './styles/CreateTodoButton.css';

export const CreateTodoButton = () => {
    return (
        <button 
        className='CreateTodoButton'
        onClick={()=>console.log("clickeado")}
        >+</button>
    );
}