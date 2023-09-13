import './styles/TodoItem.css';

export const TodoItem = ({ actividad, completed }) => {

    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed ? "Icon-check--active" : ""}`}>
                V
            </span>
            <p className={`TodoItem-p 
            ${completed ? "TodoItem-p--complete" : ""}`}>
                {actividad}
            </p>
            <span className="Icon Icon-delete">
                X
            </span>
        </li>
    );
}