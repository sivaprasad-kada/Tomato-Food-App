import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import StorecontextProvider from './contexts/StoreContexts.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StorecontextProvider>
   <App />
   </StorecontextProvider>
  </BrowserRouter>
   
  
)
 