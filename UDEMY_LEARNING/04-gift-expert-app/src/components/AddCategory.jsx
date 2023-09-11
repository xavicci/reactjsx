import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = () => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories(cat => [inputValue, ...cat]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}