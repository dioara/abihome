import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // 👈 ADD THIS
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/abihome/">           {/* 👈 AND THIS */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
