import { useState } from 'react'

export const AddCategory = ({ setCategories }) => {


    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = () => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        setCategories(cat => [inputValue, ...cat]);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
