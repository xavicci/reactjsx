import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth";
import { AppRouter } from "../../router/AppRouter";
import { render, screen } from "@testing-library/react";

describe('Pruebas en <appRouter />', () => {

    test('debe de mostrar el login si no está autenticado', () => {

        const contextvalue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextvalue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText('Login').length).toBe(2);
    });



    test('debe de mostrar el componente de Marvel si está autenticado', () => {

        const contextvalue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'JuanCarlos'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextvalue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    });
});