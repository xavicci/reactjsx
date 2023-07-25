import { useState } from 'react';

export const useCounter = (initialValue = 10) => {

    const [counter, setUseCounter] = useState(initialValue);


    return {
        counter,
    }
}