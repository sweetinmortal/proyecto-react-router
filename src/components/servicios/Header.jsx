import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>ESPE Software Dev</h1>
      <nav>
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/acerca">Acerca</NavLink>
        <NavLink to="/servicios">Servicios</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
};

export default Header;