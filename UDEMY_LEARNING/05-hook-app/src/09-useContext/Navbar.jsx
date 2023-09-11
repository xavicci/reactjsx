// En resumen, si solo necesitas crear enlaces de navegación básicos, puedes usar Link. Pero si deseas proporcionar una indicación visual para el enlace activo, puedes usar NavLink y aplicar estilos a la clase activa. En ambos casos, recuerda siempre importar los componentes adecuados de react-router-dom.

import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ""}`}
                            to="/"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ""}`}
                            to="/about"
                        >
                            About
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ""}`}
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
        // <>
        //     <Link to="/">Home</Link>
        //     <Link to="/about">About</Link>
        //     <Link to="/login">Login</Link>
        // </>
    )
}

