import { AddCategory } from "../../src/components";
import { fireEvent, render, screen } from '@testing-library/react';


describe('Pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });
        expect(input.value).toBe('Saitama');
        // screen.debug();

    });

});
