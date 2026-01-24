import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h2>404 - Página no encontrada</h2>
      <p>La ruta solicitada no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
};

export default NotFound;
