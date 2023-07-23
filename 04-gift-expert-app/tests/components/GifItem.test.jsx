import { GifItem } from "../../src/components";
import { render, screen } from '@testing-library/react';

describe('Pruebas en <GifItem.jsx />', () => {

    const title = 'Saitama';
    const url = 'https://onepunch.com/xxa.jpg'
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('should de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // console.log(screen.getByRole('img'));
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })



});
