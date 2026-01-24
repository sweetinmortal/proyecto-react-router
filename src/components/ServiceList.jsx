import ServiceCard from "./ServiceCard";

const ServiceList = ({ servicios }) => {
  if (!servicios || servicios.length === 0) {
    return <p>No hay servicios disponibles.</p>;
  }

  return (
    <div className="grid">
      {servicios.map(servicio => (
        <ServiceCard key={servicio.id} servicio={servicio} />
      ))}
    </div>
  );
};

export default ServiceList;