import { Link } from "react-router-dom";

const ServicioCard = ({ servicio }) => {
  return (
    <article className="servicio-card">
      <h3>{servicio.nombre}</h3>
      <p>{servicio.descripcion}</p>
      <Link to={`/servicios/${servicio.id}`}>Ver detalle</Link>
    </article>
  );
};

export default ServicioCard;
