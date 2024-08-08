import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from 'index.html'
import 'style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
