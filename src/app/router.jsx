import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import ServiceDetail from '../pages/ServiceDetail'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([{
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'acerca', element: <About /> },
      { path: 'contacto', element: <Contact /> },
      { path: 'servicios', element: <Services /> },
      { path: 'servicios/:id', element: <ServiceDetail /> }
    ]
  }
])