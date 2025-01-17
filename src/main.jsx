import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import FormComponent from './FormComponent'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormComponent></FormComponent>
  </StrictMode>,
)
