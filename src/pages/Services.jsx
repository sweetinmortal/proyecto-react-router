import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import ServiceList from "../components/ServiceList";
import "../styles/Services.css";

const Services = () => {
  const [categoria, setCategoria] = useState("todos");

  const servicios = [
    { id: 1, nombre: "Desarrollo Web", categoria: "web", descripcion: "Sitios y aplicaciones web modernas" },
    { id: 2, nombre: "Apps Móviles", categoria: "mobile", descripcion: "Aplicaciones Android y iOS" },
    { id: 3, nombre: "Backend", categoria: "backend", descripcion: "APIs y lógica de servidor" },
    { id: 4, nombre: "UI/UX", categoria: "web", descripcion: "Diseño de interfaces centradas en el usuario" }
  ];

  // useMemo: evita recalcular servicios filtrados
  const serviciosFiltrados = useMemo(() => {
    if (categoria === "todos") return servicios;
    return servicios.filter(servicio => servicio.categoria === categoria);
  }, [categoria, servicios]);

  // useCallback: evita recrear la función
  const cambiarCategoria = useCallback((nuevaCategoria) => {
    setCategoria(nuevaCategoria);
  }, []);

  return (
    <section>
      <h1>Servicios</h1>
      <p>Explora los servicios digitales que ofrecemos</p>

      <div className="filtros">
        <button onClick={() => cambiarCategoria("todos")}>Todos</button>
        <button onClick={() => cambiarCategoria("web")}>Web</button>
        <button onClick={() => cambiarCategoria("backend")}>Backend</button>
        <button onClick={() => cambiarCategoria("mobile")}>Mobile</button>
      </div>

      <ServiceList servicios={serviciosFiltrados} />

      <Link to="/">← Volver al inicio</Link>
    </section>
  );
};

export default Services;