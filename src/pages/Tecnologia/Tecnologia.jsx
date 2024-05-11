import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar'
import { TaskCard } from '../../components/TaskCard/TaskCard'
import '../taskCardGrid.css'

export const Tecnologia = () => {

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
      titulo: 'Infografía',
      descripcion: 'Infografía sobre desarrollo web y procesadores.',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/infografia-desarrollo-web.png',
      habilidades: 'Más conocimiento en desarrollo web: "HTML5, CSS3, FlexBox, Bootstrap", y procesadores: "LESS, SASS, PUG, JADE".',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/dabad-2021374_kinal_edu_gt/EYw0_OUy-pFNhHpNkGs7068BIToPV5OUFFqvLtZpyGAxow?e=KavedX',
    },
    {
      id: 2,
      titulo: 'Mapa conceptual',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/mapa-conceptual-tecnologias-web.png',
      descripcion: 'Mapa conceptual sobre tecnologías web.',
      habilidades: 'Más conocimiento sobre: Javascript, AJAX, MVVM, MVC, DenoJS, MeteorJS, NextJS, GraphQL, BackboneJs.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/dabad-2021374_kinal_edu_gt/Ee0_SY8sMPJHpkvMaGBNTvIBUMFk6smkFDkQK9-wq1_ofQ?e=Xz9bFL',
    },
    {
      id: 3,
      titulo: 'Prueba objetiva',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/prueba-objetiva.png',
      descripcion: 'Prueba objetiva sobre infografia y mapa conceptual.',
      habilidades: 'JavaScript, NodeJs, MongoDB, ExpressJs.',
    },
    {
      id: 4,
      titulo: 'Mapa mental',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/mapa-mental-desarrollo-web.png',
      descripcion: 'Mapa mental sobre el desarrollo web.',
      habilidades: 'Más conocimiento sobre: Hosting, Dominio, Cliente-Servidor, Web semántica, WebM, Canvas, W3C.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/dabad-2021374_kinal_edu_gt/ESSDNtFp0ypFpdkSZNVZciQBZBStIaym-qRJ5K852VHbHA?e=xBsVBs',
    },
    {
      id: 5,
      titulo: 'PMA Infografía',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/infografia-apis.png',
      descripcion: 'PMA infografía APIs y Tecnologías para creación de APIs.',
      habilidades: 'Más conocimiento sobre: Node.js, Express.js, String Boot, Django, Ruby on Rails, ASP.NET Core.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/dabad-2021374_kinal_edu_gt/EddBr5EONB1Jm9sP73i_5kQBbIWGz1Z2B6BhIWlwYlftHg?e=1MzXDa',
    },
    {
      id: 6,
      titulo: 'PMA Investigación',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/investigacion-desarrollo-web-frontend.png',
      descripcion: 'PMA investigación sobre desarrollo web FrontEnd.',
      habilidades: 'Más conocimiento sobre: Angular, Svelt, React.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/dabad-2021374_kinal_edu_gt/EfsWBxpV-StKgSFqOyxGh6MBgNAE0FRrU716kjQ7ERQT9w?e=1aTNFm',
    },
    {
      id: 6,
      titulo: 'Prueba objetiva #2',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/prueba-objetiva2.png',
      descripcion: 'Prueba objetiva 2 sobre un Kahoot',
      habilidades: 'JavaScript, NodeJs, MongoDB, ExpressJs.'
    },
  ];

  const tareasB2 = [
    {
      id: 1,
      titulo: 'Infografía',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/infografia-beneficios-react.png',
      descripcion: 'Beneficios de la utilización de ReactJS.',
      habilidades: 'Más conocimiento en los beneficios de React a otras librerías.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/dabad-2021374_kinal_edu_gt/EVSzVa0GQjZAn2a3544kEegBaDdiBaV_0Qc9O-C_mnlFog?e=gLhkAD',
    },
    {
      id: 2,
      titulo: 'Propuesta proyecto',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/propuesta-proyecto-myPym.png',
      descripcion: 'Propuesta de proyecto que solvente un problema social.',
      habilidades: 'NodeJs, React, MongoDB, ExpressJs',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/dabad-2021374_kinal_edu_gt/ERYOyRIXnlVEvid8UHB6xhYBieZiHGPge7JzeRmkqs-_tA?e=pK0JQ0',
    },
    {
      id: 3,
      titulo: 'Investigación',
      imagenUrl: 'https://cetkinal-my.sharepoint.com/personal/dabad-2021374_kinal_edu_gt/Documents/Blog/Tecnologia/imagesTask/investigacion-estilos-codificacion.png',
      descripcion: 'Investigación sobre estilos de codificación.',
      habilidades: 'Más conocimiento sobre algunos estilos de codificación: PascalCase, camelCase y snake_case',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/dabad-2021374_kinal_edu_gt/EXn8Lr_EIZBEv56lkAV6BFMBDKntmusuDs2g2-2RYC25Hg?e=q9IXPB',
    }
  ];

  return (
    <div>
      <NavBar />
      <br></br>
      <h2 className='color-text'>TECNOLOGÍA</h2>
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

