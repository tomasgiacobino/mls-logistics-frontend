import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.tsx'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/custom.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
