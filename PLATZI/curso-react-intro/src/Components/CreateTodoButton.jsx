import './styles/CreateTodoButton.css';

export const CreateTodoButton = ({ setOpenModal }) => {
    return (
        <button
            className='CreateTodoButton'
            onClick={() => setOpenModal(state => !state)}
        >+</button>
    );
}