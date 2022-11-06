import React from 'react'
import "./Sidebar.scss"
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
  return (
    <div className='Sidebar'>
      {/* <Link className='logo' to='/'>
            <img src={logo} alt="logo" />
        </Link> */}

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} /><p>Home</p>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about">
          <FontAwesomeIcon icon={faUser} /><p>About me</p>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/projects">
          <FontAwesomeIcon icon={faPenToSquare} /><p>Projects</p>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} /><p>Contact</p>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bobangajicsm"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>


      </ul>
    </div>
  )
}

export default Sidebar
