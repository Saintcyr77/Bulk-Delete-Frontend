import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProgressProvider from './Components/ProgressProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProgressProvider>

    <App />
    </ProgressProvider>
  </React.StrictMode>,
)
