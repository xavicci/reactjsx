import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <MainApp />', () => {

    test('should debe de mostrar el HomePage', () => {

        render(
            <MemoryRouter initialEntries={['/']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();
        screen.debug();

    });

    test('should debe de mostrar el HomePage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();
        screen.debug();

    });

});
