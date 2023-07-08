import { heroes, owner } from "../data/heroes";

console.log(heroes);

const getHeroeById = (id) => {
    return heroes.find(element => element.id === id ? true : false);
}

console.log(getHeroeById(5));


const getHeroeByOwner = (owner) => {
    return heroes.filter(element => element.owner === owner ? true : false);
}

console.log(getHeroeByOwner('DC'));

console.log(owner)