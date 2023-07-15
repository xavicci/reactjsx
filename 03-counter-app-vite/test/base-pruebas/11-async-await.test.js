import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => {
    test('getImagen debe de retornar un URL de la Imagen', async () => {

        const url = await getImagen();
        console.log(url)

        expect(typeof url).toBe('string');
    })

})
