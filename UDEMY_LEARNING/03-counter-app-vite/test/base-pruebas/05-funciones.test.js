import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto ', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        // 
        // los objetos se comparan en posicion de memoria
        // 
        expect(testUser).toStrictEqual(user);
        // getUsuarioActivo
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Xavier';

        const testUser2 = {
            uid: 'ABC567',
            username: name
        }

        const user2 = getUsuarioActivo(name);
        expect(user2).toStrictEqual(testUser2);

    });
});
