// yarn add -D @types/jest
// yarn add --dev babel-jest @babel/core @babel/preset-env
describe('Pruebas en <DemoComponent />', () => {




    test('Esta prueba no debe de fallar', () => {

        // 1.- inicializacion
        // 2.- estímulo
        // 3.- Observar el comportamiento.. esperado

        const message1 = 'Hola';
        const message2 = message1.trim();

        expect(message1).toBe(message2);

    });

});