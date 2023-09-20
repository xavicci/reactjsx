import React from 'react';
import './styles/TodoSearch.css';
import { TodoContext } from '../Context/TodoContext';

export const TodoSearch = () => {

    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);
    
    return (
        <input
            className="TodoSearch"
            placeholder="Digit TODO task"
            value={searchValue}
            onChange={(event)=> {
                setSearchValue(event.target.value);
                console.log(event);
                console.log(event.target);
                console.log(event.target.value);
                console.log(event.target.value);
            }}  
        />
    );
}