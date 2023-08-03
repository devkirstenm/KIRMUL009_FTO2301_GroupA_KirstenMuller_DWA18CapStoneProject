import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// createRoot API: rendering root element
// tells React to start rendering the user interface and attach it to the "root" of the HTML document
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* it will be attached here
  <body>
    <div id="root"></div>
  </body>
*/