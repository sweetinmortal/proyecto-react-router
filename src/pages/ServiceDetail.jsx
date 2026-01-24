import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";

const serviciosSimulados = [
  {
    id: 1,
    nombre: "Desarrollo Web",
    categoria: "web",
    descripcion: "Sitios y aplicaciones web modernas",
    detalle: "Desarrollamos aplicaciones web usando React, Vite y buenas prácticas.",
    tecnologias: ["React", "Vite", "CSS", "REST"]
  },
  {
    id: 2,
    nombre: "Apps Móviles",
    categoria: "mobile",
    descripcion: "Aplicaciones Android y iOS",
    detalle: "Creamos aplicaciones móviles híbridas y nativas enfocadas en rendimiento.",
    tecnologias: ["Flutter", "React Native"]
  },
  {
    id: 3,
    nombre: "Backend",
    categoria: "backend",
    descripcion: "APIs y lógica de servidor",
    detalle: "Diseñamos APIs REST seguras y escalables.",
    tecnologias: ["Node.js", "Express", "PostgreSQL"]
  },
  {
    id: 4,
    nombre: "UI/UX",
    categoria: "web",
    descripcion: "Diseño de interfaces",
    detalle: "Diseñamos interfaces centradas en la experiencia del usuario.",
    tecnologias: ["Figma", "Design Systems"]
  }
];

const ServiceDetail = () => {
  const { id } = useParams();
  const servicioId = Number(id);
  const idEsValido = !isNaN(servicioId);

  const servicio = useMemo(() => {
    if (!idEsValido) return null;
    return serviciosSimulados.find(s => s.id === servicioId) || null;
  }, [servicioId, idEsValido]);

  const serviciosRelacionados = useMemo(() => {
    if (!servicio) return [];
    return serviciosSimulados.filter(
      s => s.categoria === servicio.categoria && s.id !== servicio.id
    );
  }, [servicio]);

  if (!idEsValido || !servicio) {
    return (
      <section>
        <h2>Servicio no encontrado</h2>
        <Link to="/servicios">← Volver a servicios</Link>
      </section>
    );
  }

  return (
    <section>
      <nav>
        <Link to="/servicios">Servicios</Link> / <span>{servicio.nombre}</span>
      </nav>

      <h1>{servicio.nombre}</h1>
      <p>{servicio.detalle}</p>

      <h3>Tecnologías utilizadas</h3>
      <ul>
        {servicio.tecnologias.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      {serviciosRelacionados.length > 0 && (
        <>
          <h3>Servicios relacionados</h3>
          <ul>
            {serviciosRelacionados.map(rel => (
              <li key={rel.id}>
                <Link to={`/servicios/${rel.id}`}>{rel.nombre}</Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <Link to="/servicios">← Volver a servicios</Link>
    </section>
  );
};

export default ServiceDetail;