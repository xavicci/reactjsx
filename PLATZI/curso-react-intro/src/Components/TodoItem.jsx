import './styles/TodoItem.css';
import { CompleteIcon } from '../Icons/CompleteIcon';
import { DeleteIcon } from '../Icons/DeleteIcon';

export const TodoItem = ({ actividad, completed, onComplete, onDelete }) => {

    return (
        <li className="TodoItem">
            {/* <span
                className={`Icon Icon-check ${completed ? "Icon-check--active" : ""}`}
                onClick={onComplete}
            >
                V
            </span> */}

            <CompleteIcon
                completed={completed}
                onComplete={onComplete}
            />

            <p className={`TodoItem-p 
            ${completed ? "TodoItem-p--complete" : ""}`}>
                {actividad}
            </p>
            {/* <span 
            className="Icon Icon-delete"
            onClick={onDelete}
            >
                X
            </span> */}

            <DeleteIcon
            onDelete={onDelete}
            />
            
        </li>
    );
}