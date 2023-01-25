import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LojaContextProvider } from './components/contexts/LojaContext'
import { VisibleContextProvider } from './components/contexts/VisibleContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <VisibleContextProvider>
        <LojaContextProvider>
          <App />
        </LojaContextProvider>      
      </VisibleContextProvider>
    </React.StrictMode>
)
