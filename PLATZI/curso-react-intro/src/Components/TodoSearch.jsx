import { useState } from 'react';
import './styles/TodoSearch.css';

export const TodoSearch = () => {
    
    const [searchValue, setSearchValue] = useState('');

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