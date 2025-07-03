import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Home } from './pages/home.tsx'
import WebGui from './pages/WebGui.tsx'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WebGui />
  </StrictMode>,
)
