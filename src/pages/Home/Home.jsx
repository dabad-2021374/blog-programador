import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar'
import '../taskCardGrid.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className='centered-container'>
      
        <Link to='/tecnologia'>
          <img
            src="https://kinal.academy/pluginfile.php/404489/course/overviewfiles/Tecnología%20IIIAM.gif"
            alt="Tecnologia GIF"
            className="centered-image"
          />
        </Link>

        <Link to='/taller'>
          <img
            src="https://kinal.academy/pluginfile.php/404490/course/overviewfiles/Taller%20III%20bueno.gif"
            alt="Taller GIF"
            className="centered-image"
          />
        </Link>

        <Link to='/practica-supervisada'>
          <img
            src="https://kinal.academy/pluginfile.php/404491/course/overviewfiles/Práctica%20Supervisada%20AM.gif"
            alt="Práctica Supervisada GIF"
            className="centered-image"
          />
        </Link>

      </div>
    </div>
  )
}