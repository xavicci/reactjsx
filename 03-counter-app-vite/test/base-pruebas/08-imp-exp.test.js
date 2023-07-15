import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });
    test('getHeroById debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        //   expect(hero).toEqual({id:1,name:'Batman',owner:'DC'})
        expect(hero).toBe(undefined);
        expect(hero).toBeFalsy();
    });

    test('getHeroByOwner debe de regresar heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        // console.log(heroes);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
    })




})
