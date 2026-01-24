import { Link } from 'react-router-dom'

function Home() {
    return (
        <section>
            <h1>Bienvenido a Servicios Digitales</h1>
            <p>
                Ofrecemos soluciones tecnológicas modernas para empresas y emprendedores.
            </p>
            <Link to="/servicios" className="btn">Ver servicios</Link>
        </section>
    )
}

export default Home;