import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar'

import { TaskCard } from '../../components/TaskCard/TaskCard'
import '../taskCardGrid.css'

export const Taller = () => {

  const data = (id, titulo, descripcion, imagenUrl, habilidades, link, clase) => (
    <TaskCard
      key={id}
      titulo={titulo}
      descripcion={descripcion}
      imagenUrl={imagenUrl}
      habilidades={habilidades}
      link={link}
    />
  );

  const tareasB1 = [
    {
      id: 1,
      titulo: 'Laboratorio #1',
      descripcion: 'Creación de página web con 3 vistas "Gustos, biografía y rediseño de Kinal academy".',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/paginas-web.png',
      habilidades: 'Más habilidad en manejo de HTML Y CSS.',
      link: 'https://github.com/dabad-2021374/Paginas-web.git',
      clase: 'taller'
    },
    {
      id: 2,
      titulo: 'Laboratorio #2',
      descripcion: 'Creación de backend de un sistema de adopción de mascotas.',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/laboratorio2-adopcion-mascotas.png',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/AdopcionMascotas.git'
    },
    {
      id: 3,
      titulo: 'Laboratorio #3',
      descripcion: 'Creación de Backend para la gestión de una empresa llamada COPEREX.',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/laboratorio3-gestor-empresas.png',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/GestorDeEmpresas.git'
    },
    {
      id: 4,
      titulo: 'Revisión avances proyecto final',
      descripcion: '35% de avance de proyecto final "Ventas online".',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/proyecto-final-tienda-online.png',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/Proyecto-final-registro-de-ventas.git'
    },
    {
      id: 5,
      titulo: 'Proyecto Final Bim. I',
      descripcion: 'Entrega de proyecto bimestral "Ventas online" terminado.',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/proyecto-final-terminado.png',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/Proyecto-final-registro-de-ventas/tree/proyectoTerminado'
    },
    {
      id: 6,
      titulo: 'PMA Prueba objetiva',
      descripcion: 'PMA sobre una prueba en la que se evaluaron temas como: tecnologías web, nodeJs, MongoDB, etc...',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/PMA-taller-prueba-objetiva.png',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
    },
    {
      id: 7,
      titulo: 'PMA Repositorio de portafolio',
      descripcion: 'PMA donde se entrego portafolio de ejercicios en clase.',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/PMA-repositorio-portafolio.png',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/PMAs-Taller'
    },
    {
      id: 8,
      titulo: 'PMA Laboratorio #3',
      descripcion: 'PMA donde se entrego backend para una aplicación para gestionar una biblioteca',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/PMA-proyecto-biblioteca.png',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/PMA-Biblioteca.git'
    }
  ];

  const tareasB2 = [
    {
      id: 1,
      titulo: 'Ejercicios HackerRank',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/ejercicios-hackerrank.png',
      descripcion: '8 ejercicios realizados en HackerRank sobre lógica de programación.',
      habilidades: 'Más conocimiento para resolver problemas en Javascript NoseJs.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/dabad-2021374_kinal_edu_gt/EToX3kCyY8dDsmXCoKa5WwUBDxgjCntCQjfGgZUL9K6img?e=6234Dc',
    },
    {
      id: 2,
      titulo: 'Revisión avances proyecto final',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/revision-avances-proyecto-final-b2.png',
      descripcion: 'Revisión de avances (30%) en proyecto bimestral “Gestor de Hoteles”.',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/Grupo-7-IN6AM/ZaruTraveling',
    }
  ];

  return (
    <div>
      <NavBar />
      <br></br>
      <h2 className='color-text'>TALLER</h2>
      <br></br>
      <h3 className='color-text'>Bimestre 1</h3>
      <div className='task-grid'>
        {tareasB1.map((tarea) => data(tarea.id, tarea.titulo, tarea.descripcion, tarea.imagenUrl, tarea.habilidades, tarea.link, tarea.clase))}
      </div>
      <h3 className='color-text'>Bimestre 2</h3>
      <div className='task-grid'>
        {tareasB2.map((tarea) => data(tarea.id, tarea.titulo, tarea.descripcion, tarea.imagenUrl, tarea.habilidades, tarea.link))}
      </div>
    </div>
  )
}
