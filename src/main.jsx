import React from 'react'
import ReactDOM from 'react-dom/client'
import { BarraSuperior } from './cabecera/BarraSuperior'
//import 'bootstrap/dist/css/bootstrap.css'
import './custom.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BarraSuperior />
  </React.StrictMode>
)
