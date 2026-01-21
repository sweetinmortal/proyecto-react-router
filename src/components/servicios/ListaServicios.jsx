import ServicioCard from "./ServicioCard";

const ListaServicios = ({ servicios }) => {
  if (servicios.length === 0) {
    return <p>No hay servicios disponibles.</p>;
  }

  return (
    <div className="lista-servicios">
      {servicios.map(servicio => (
        <ServicioCard key={servicio.id} servicio={servicio} />
      ))}
    </div>
  );
};

export default ListaServicios;
