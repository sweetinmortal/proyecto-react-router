# React + Vite

## Tema

Servicios digitales.

## Descripción

Este proyecto es una aplicación web desarrollada con **React + Vite**, cuyo objetivo es presentar un sitio informativo con navegación por rutas utilizando **React Router DOM**.  
El sitio mantiene una estructura clara, navegación persistente y diseño responsive básico.

## Tecnologías utilizadas

- React
- Vite
- React Router DOM

## Requisitos
- Node.js (v18 o superior)

## Instalación
```bash
npm install
npm run dev
```

## Mapa de rutas

| URL            | Ruta           | Componente    | Descripción           |
| -------------- | -------------- | ------------- | --------------------- |
| /              | /              | Home          | Página de inicio      |
| /acerca        | /acerca        | About         | Información del sitio |
| /contacto      | /contacto      | Contact       | Página de contacto    |
| /servicios     | /servicios     | Services      | Lista de servicios    |
| /servicios/:id | /servicios/:id | ServiceDetail | Detalle de servicio   |
| *              | *              | NotFound      | Página 404            |

## Gif

![Gif Página Web del Proyecto](src/img/proyecto_react_router.gif)

