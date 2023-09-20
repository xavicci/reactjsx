import { useState, useEffect } from "react";

export const useLocalStorage =(itemName, initalValue)=> {

    const [item, setItem] = useState(initalValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
        
    useEffect(() => {

        setTimeout(()=>{
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
        
                if (!localStorageItem) {
                    localStorage.setItem(itemName, initalValue);
                    parsedItem = [];
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
        
                setLoading(false);
                
                }catch (error){
                    setLoading(false);
                    setError(true);
                }
        },2000);

    }, []);
   
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {item, saveItem,loading,error};
}



// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { id: 1, text: 'Ir a trabajar', completed: true },
//   { id: 2, text: 'Ir a almorzar', completed: false },
//   { id: 3, text: 'Salir a pasear', completed: true },
//   { id: 6, text: 'Salir a ver pelis', completed: true },
//   { id: 4, text: 'Ver pelis', completed: false },
//   { id: 5, text: 'Estudiar', completed: false },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify( defaultTodos));