import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import ContextProvider from './providers/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ContextProvider>
  </StrictMode>,
)
