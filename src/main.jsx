import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './custom.scss'
import { ResumeApp } from './resumeApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ResumeApp />
    </React.StrictMode>
  </BrowserRouter>
)
