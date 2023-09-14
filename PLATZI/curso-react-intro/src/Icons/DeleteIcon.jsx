import React from 'react';
import { TodoIcon } from './TodoIcon';

export const DeleteIcon = ({onDelete}) => {
    return (
        <TodoIcon
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    );
}

