import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRuter from './router'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRuter />
  </StrictMode>,
)
