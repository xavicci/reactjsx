import { types } from "../../../auth/types/types";

describe('Pruebas en types', () => {

    test('debe de regresar estos types', () => {

        console.log(types);
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });

    });

});