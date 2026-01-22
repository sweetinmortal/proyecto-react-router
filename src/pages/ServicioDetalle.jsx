import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";

/**
 * Simulación de datos que normalmente vendrían de una API
 */
const serviciosSimulados = [
  {
    id: 1,
    nombre: "Desarrollo Web",
    categoria: "web",
    descripcion: "Sitios y aplicaciones web modernas",
    detalle:
      "Desarrollamos aplicaciones web usando React, arquitectura moderna y buenas prácticas.",
    tecnologias: ["React", "Vite", "CSS", "REST"]
  },
  {
    id: 2,
    nombre: "Apps Móviles",
    categoria: "mobile",
    descripcion: "Aplicaciones Android y iOS",
    detalle:
      "Creamos aplicaciones móviles híbridas y nativas enfocadas en rendimiento.",
    tecnologias: ["Flutter", "React Native"]
  },
  {
    id: 3,
    nombre: "Backend",
    categoria: "backend",
    descripcion: "APIs y lógica de servidor",
    detalle:
      "Diseño e implementación de APIs REST seguras y escalables.",
    tecnologias: ["Node.js", "Express", "PostgreSQL"]
  },
  {
    id: 4,
    nombre: "UI/UX",
    categoria: "web",
    descripcion: "Diseño de interfaces",
    detalle:
      "Diseñamos interfaces centradas en la experiencia del usuario.",
    tecnologias: ["Figma", "Design Systems"]
  }
];

const ServicioDetalle = () => {
  const { id } = useParams();

  /**
   * Validación del parámetro
   * Evita errores si el id no es numérico
   */
  const servicioId = Number(id);
  const idEsValido = !isNaN(servicioId);

  /**
   * Búsqueda del servicio principal
   * useMemo evita recalcular en cada render
   */
  const servicio = useMemo(() => {
    if (!idEsValido) return null;
    return serviciosSimulados.find(s => s.id === servicioId) || null;
  }, [servicioId, idEsValido]);

  /**
   * Servicios relacionados por categoría
   */
  const serviciosRelacionados = useMemo(() => {
    if (!servicio) return [];
    return serviciosSimulados.filter(
      s => s.categoria === servicio.categoria && s.id !== servicio.id
    );
  }, [servicio]);

  // Caso: parámetro inválido
  if (!idEsValido) {
    return (
      <section>
        <h2>Parámetro inválido</h2>
        <p>El identificador del servicio no es válido.</p>
        <Link to="/servicios">← Volver a servicios</Link>
      </section>
    );
  }

  // Caso: servicio no existe
  if (!servicio) {
    return (
      <section>
        <h2>Servicio no encontrado</h2>
        <p>No existe un servicio con el ID solicitado.</p>
        <Link to="/servicios">← Volver a servicios</Link>
      </section>
    );
  }

  return (
    <section>
      {/* Breadcrumb simple */}
      <nav>
        <Link to="/servicios">Servicios</Link> /{" "}
        <span>{servicio.nombre}</span>
      </nav>

      <h1>{servicio.nombre}</h1>
      <p><strong>Categoría:</strong> {servicio.categoria}</p>
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
                <Link to={`/servicios/${rel.id}`}>
                  {rel.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <Link to="/servicios">← Volver a servicios</Link>
    </section>
  );
};

export default ServicioDetalle;
