import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    test('debe de hacer un math con el snapshot', () => {
        const title = 'Hola, soy Xavier';
        render(<FirstApp title={title} />)
    });

});