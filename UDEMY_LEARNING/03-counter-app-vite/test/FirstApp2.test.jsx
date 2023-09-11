import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';

    test('debe de hacer match con el snapshot ', () => {

        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostar el mensaje "hola, Soy Goku"', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
        // screen.debug();
    })

    test('debe de mostrar el titulo en un h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    })

    test('debe de mostar el subtitulo enviado por props', () => {

        render(<FirstApp title={title} subTitle={subTitle} />);
        expect(screen.getAllByText(subTitle).length).toBe(1);
    })

});