import './styles/TodoList.css';

export const TodoList = ({ children }) => {
    return (
        <ul className='TodoList'>
            {children}
        </ul>
    );
}