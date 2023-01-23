import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { VisibleContextProvider } from './components/contexts/VisibleContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <VisibleContextProvider>
        <App />
      </VisibleContextProvider>
    </React.StrictMode>
)
