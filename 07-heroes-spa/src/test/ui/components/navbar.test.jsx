import { render, screen, fireEvent } from "@testing-library/react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../ui/components/Navbar";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en el componente <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'xavi',
            id: '123'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('should debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        screen.debug();
        expect(screen.getByText('xavi')).toBeTruthy();

    });

    test('debe de llamar el logout y navigate cuando se hace click en el boton logout', () => {

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { "replace": true });

    });

})