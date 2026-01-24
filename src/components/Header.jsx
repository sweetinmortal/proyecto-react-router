import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <h2>Servicios Digitales</h2>
            <nav>
                <NavLink to="/" end>Inicio</NavLink>
                <NavLink to="/acerca">Acerca</NavLink>
                <NavLink to="/servicios">Servicios</NavLink>
                <NavLink to="/contacto">Contacto</NavLink>
            </nav>
        </header>
    )
}

export default Header;