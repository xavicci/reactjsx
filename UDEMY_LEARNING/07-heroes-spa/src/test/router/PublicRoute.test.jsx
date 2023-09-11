import { render, screen } from "@testing-library/react";
import { PublicRouter } from "../../router/PublicRouter";
import { AuthContext } from "../../auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en <PublicRoute />', () => {

    test('debe de mostrar el children si no está autenticado', () => {

        const contextValue = {
            logged: false
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRouter>
                    <h1>Ruta Publica</h1>
                </PublicRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Publica')).toBeTruthy();
    });

    test('debe de navegar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRouter>
                                <h1>Ruta Publica</h1>
                            </PublicRouter>
                        } />
                        <Route path='marvel' element={<h1>Página Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();

        expect(screen.getByText('Página Marvel')).toBeTruthy();

    });

});