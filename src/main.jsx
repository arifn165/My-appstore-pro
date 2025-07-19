import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/routes.jsx'
import AuthProvider from './context/AuthContext.jsx'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
          <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
