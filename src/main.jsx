import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Berlin from './pages/Berin.jsx'
import Düsseldorf from './pages/Düsseldorf.jsx'
import Hamburg from './pages/Hamburg.jsx'
import Köln from './pages/Köln.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/köln' element={<Köln />} />
          <Route path='/berlin' element={<Berlin />} />
          <Route path='/hamburg' element={<Hamburg />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
