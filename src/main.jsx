import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// createRoot API: rendering root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
