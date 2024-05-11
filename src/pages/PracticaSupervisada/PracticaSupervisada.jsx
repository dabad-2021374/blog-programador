import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar'
import { TaskCard } from '../../components/TaskCard/TaskCard'
import '../taskCardGrid.css'

export const PracticaSupervisada = () => {

  const data = (id, titulo, descripcion, imagenUrl, habilidades, link) => (
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
      titulo: 'Agenda web',
      descripcion: 'Agenda web de contactos hecha con Javascript, HTML y CSS.',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/agenda-web.png',
      habilidades: 'Más habilidad en manejo de funciones en Javascript',
      link: 'https://github.com/dabad-2021374/Agenda-web.git'
    },
    {
      id: 2,
      titulo: 'Control académico',
      descripcion: 'Backend en nodeJs sobre una aplicación de control académico',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/control-academico.png',
      habilidades: 'Se desarrollaron las habilidades en tecnologías como: NodeJs, MongoDB, ExpressJs, ',
      link: 'https://github.com/dabad-2021374/Control-Academico.git'
    },
    {
      id: 3,
      titulo: 'Gestor de opiniones',
      descripcion: 'Backend en nodeJs sobre una aplicación de gestor de opiniones.',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/gestor%20de%20opiniones.png',
      habilidades: 'Se desarrollaron las habilidades en tecnologías como: NodeJs, MongoDB, ExpressJs, ',
      link: 'https://github.com/dabad-2021374/PSGestorDeOpiniones.git'
    },
    {
      id: 4,
      titulo: 'PMA Prueba Objetiva',
      descripcion: 'Se evaluaron temas de nodeJs, Express y MongoDB.',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/PMA-prueba-objetiva-PS-B1.png',
      habilidades: 'Se desarrollaron las habilidades en tecnologías como: NodeJs, MongoDB, ExpressJs, ',
    },
    {
      id: 5,
      titulo: 'PMA Laboratorio',
      descripcion: 'Backend en nodeJs sobre una aplicación de control académico (Terminado).',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/control-academico.png',
      habilidades: 'Se desarrollaron las habilidades en tecnologías como: NodeJs, MongoDB, ExpressJs, ',
      link: 'https://github.com/dabad-2021374/Control-Academico/tree/proyectoTerminado'
    }
  ];

  const tareasB2 = [
    {
      id: 1,
      titulo: 'Exposición grupal',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/exposicion-ionic.png',
      descripcion: 'Exposición con mi grupo sobre la tecnología Ionic',
      habilidades: 'Más conocimiento en la tecnología para la creación de interfaces moviles Ionic.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/dabad-2021374_kinal_edu_gt/EUCED6-ZYNZHuEVnGd8wPJ0ByQu2yJjJcEkUXLOhPqu7-Q?e=KZ0Pgd',
    },
    {
      id: 2,
      titulo: 'Proyecto grupal',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/proyecto-almacenadora.png',
      descripcion: 'Desarrollo Backend y Frontend de aplicación web "Almacenadora"',
      habilidades: 'Más conocimiento en la librería React.',
      link: 'https://github.com/Grupo-7-IN6AM/AlmacenadoraIN6AM-G7-React',
    }
  ];

  return (
    <div>
      <NavBar />
      <br></br>
      <h2 className='color-text'>PRACTICA SUPERVISADA</h2>
      <br></br>
      <h3 className='color-text'>Bimestre 1</h3>
      <div className='task-grid'>
        {tareasB1.map((tarea) => data(tarea.id, tarea.titulo, tarea.descripcion, tarea.imagenUrl, tarea.habilidades, tarea.link))}
      </div>
      <h3 className='color-text'>Bimestre 2</h3>
      <div className='task-grid'>
        {tareasB2.map((tarea) => data(tarea.id, tarea.titulo, tarea.descripcion, tarea.imagenUrl, tarea.habilidades, tarea.link))}
      </div>
    </div>
  )
}

