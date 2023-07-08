import { heroes, owner } from "../data/heroes";



export const getHeroeById = (id) => {
    return heroes.find(element => element.id === id ? true : false);
}




export const getHeroeByOwner = (owner) => {
    return heroes.filter(element => element.owner === owner ? true : false);
}

