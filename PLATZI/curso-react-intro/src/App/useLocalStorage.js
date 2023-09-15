import { useState } from "react";

export const useLocalStorage =(itemName, initalValue)=> {

    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, initalValue);
        parsedItem = [];
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = useState(parsedItem);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return [item, saveItem];
}