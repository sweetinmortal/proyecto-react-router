import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Servicios from "../pages/Servicios";
import ServicioDetalle from "../pages/ServicioDetalle";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "acerca", element: <About /> },
      { path: "contacto", element: <Contact /> },
      { path: "servicios", element: <Servicios /> },
      { path: "servicios/:id", element: <ServicioDetalle /> }, 
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;