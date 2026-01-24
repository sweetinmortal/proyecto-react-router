import { Link } from "react-router-dom";

const Home = () => {
  return (

    <section className="page-card">
      <h2>Bienvenido a ESPE Software Dev</h2>
      <p>
        Plataforma informativa sobre servicios de desarrollo web, aplicaciones móviles,
        backend y diseño UI/UX.
      </p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/servicios" style={{
           background: "#2563eb", color: "white", padding: "10px 20px", 
           borderRadius: "5px", textDecoration: "none" 
        }}>
          Conocer más
        </Link>
      </div>
    </section>
  );
};

export default Home;

