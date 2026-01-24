import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import "./Servicios.css";

const serviciosSimulados = [
  { id: 1, nombre: "Desarrollo Web", categoria: "web", descripcion: "Sitios y aplicaciones web modernas", detalle: "Desarrollamos aplicaciones web usando React, arquitectura moderna y buenas prácticas.", tecnologias: ["React", "Vite", "CSS", "REST"] },
  { id: 2, nombre: "Apps Móviles", categoria: "mobile", descripcion: "Aplicaciones Android y iOS", detalle: "Creamos aplicaciones móviles híbridas y nativas enfocadas en rendimiento.", tecnologias: ["Flutter", "React Native"] },
  { id: 3, nombre: "Backend", categoria: "backend", descripcion: "APIs y lógica de servidor", detalle: "Diseño e implementación de APIs REST seguras y escalables.", tecnologias: ["Node.js", "Express", "PostgreSQL"] },
  { id: 4, nombre: "UI/UX", categoria: "web", descripcion: "Diseño de interfaces", detalle: "Diseñamos interfaces centradas en la experiencia del usuario.", tecnologias: ["Figma", "Design Systems"] }
];

const ServicioDetalle = () => {
  const { id } = useParams();
  const servicioId = Number(id);
  const idEsValido = !isNaN(servicioId);

  const servicio = useMemo(() => {
    if (!idEsValido) return null;
    return serviciosSimulados.find(s => s.id === servicioId) || null;
  }, [servicioId, idEsValido]);

  const serviciosRelacionados = useMemo(() => {
    if (!servicio) return [];
    return serviciosSimulados.filter(s => s.categoria === servicio.categoria && s.id !== servicio.id);
  }, [servicio]);

  if (!idEsValido || !servicio) {
    return (
      <div className="detalle-container">
        <section className="page-card">
          <h2>Servicio no encontrado</h2>
          <Link to="/servicios" className="btn-volver">← Volver a servicios</Link>
        </section>
      </div>
    );
  }

  return (
    <div className="detalle-container">
      <section className="detalle-card">
        <nav className="breadcrumb">
          <Link to="/servicios">Servicios</Link> / <span>{servicio.nombre}</span>
        </nav>

        <span className="categoria-tag">{servicio.categoria.toUpperCase()}</span>
        <h1>{servicio.nombre}</h1>
        <p className="descripcion-larga">{servicio.detalle}</p>

        <h3>Tecnologías utilizadas</h3>
        <div className="tech-stack">
          {servicio.tecnologias.map(tech => (
            <span key={tech} className="tech-item">{tech}</span>
          ))}
        </div>

        {serviciosRelacionados.length > 0 && (
          <div className="relacionados">
            <h3>Servicios relacionados</h3>
            <ul>
              {serviciosRelacionados.map(rel => (
                <li key={rel.id}>
                  <Link to={`/servicios/${rel.id}`}>{rel.nombre}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{marginTop: '30px'}}>
            <Link to="/servicios" className="btn-volver">← Volver a servicios</Link>
        </div>
      </section>
    </div>
  );
};

