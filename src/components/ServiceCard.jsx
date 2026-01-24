import { Link } from "react-router-dom";

const ServiceCard = ({ servicio }) => {
  return (
    <article className="card">
      <h3>{servicio.nombre}</h3>
      <p>{servicio.descripcion}</p>
      <Link to={`/servicios/${servicio.id}`}>Ver detalle</Link>
    </article>
  );
};

export default ServiceCard;