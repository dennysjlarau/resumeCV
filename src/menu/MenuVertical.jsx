import {NavLink} from 'react-router-dom';

export const MenuVertical = () => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <NavLink 
          className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }` } 
          to="/presentacion" >
          Presentación
        </NavLink>
        <NavLink 
          className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }` } 
          to="/info" >
          Información Personal
        </NavLink>
        <NavLink 
          className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }` } 
          to="/contacto" >
          Contacto
        </NavLink>
      </li>
    </ul>
  )
}
