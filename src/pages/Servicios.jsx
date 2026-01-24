import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import ListaServicios from "../components/ListaServicios";
import "./Servicios.css";

const Servicios = () => {
  const [categoria, setCategoria] = useState("todos");

  const servicios = [
    { id: 1, nombre: "Desarrollo Web", categoria: "web", descripcion: "Sitios y aplicaciones web modernas" },
    { id: 2, nombre: "Apps Móviles", categoria: "mobile", descripcion: "Aplicaciones Android y iOS" },
    { id: 3, nombre: "Backend", categoria: "backend", descripcion: "APIs y lógica de servidor" },
    { id: 4, nombre: "UI/UX", categoria: "web", descripcion: "Diseño de interfaces" },
  ];

  // 🔹 useMemo: evita recalcular la lista filtrada innecesariamente
  const serviciosFiltrados = useMemo(() => {
    if (categoria === "todos") return servicios;
    return servicios.filter(s => s.categoria === categoria);
  }, [categoria, servicios]);

  // 🔹 useCallback: evita recrear la función en cada render
  const cambiarCategoria = useCallback((nuevaCategoria) => {
    setCategoria(nuevaCategoria);
  }, []);

  return (
    <section className="servicios">
      <h1>Servicios</h1>
      <p>Explora los servicios que ofrecemos</p>

      <div className="filtros">
        <button onClick={() => cambiarCategoria("todos")}>Todos</button>
        <button onClick={() => cambiarCategoria("web")}>Web</button>
        <button onClick={() => cambiarCategoria("backend")}>Backend</button>
        <button onClick={() => cambiarCategoria("mobile")}>Mobile</button>
      </div>

      <ListaServicios servicios={serviciosFiltrados} />

      <Link to="/">← Volver al inicio</Link>
    </section>
  );
};

export default Servicios;
