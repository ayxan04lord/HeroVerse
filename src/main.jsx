import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { FavoritesProvider } from './contexts/FavoritesContext'
import './index.css'
import App from './Components/app/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
