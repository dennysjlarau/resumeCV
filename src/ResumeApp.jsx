import {Route, Routes, Navigate} from 'react-router-dom'
import { BarraSuperior } from './cabecera/BarraSuperior'
import { Contacto } from './cabecera/Contacto'
import { InformacionPersonal } from './cabecera/InformacionPersonal'
import { Presentacion } from './cabecera/Presentacion'
import { MenuVertical } from './menu/MenuVertical'


export const ResumeApp = () => {
  return (
    <>
      <header>
        <BarraSuperior/>
      </header>

      <aside className="sidebar">
        <MenuVertical/>
      </aside>

     

      <Routes>
        <Route path="/presentacion" element={ <Presentacion/> }/>
        <Route path="info" element={ <InformacionPersonal/> }/>
        <Route path="contacto" element={ <Contacto/> }/>

        l<Route path="/" element={ <Navigate to="/presentacion" /> } />
        <Route path="/*" element={ <Navigate to="/presentacion" /> } />
      </Routes>
    </>
  )
}
