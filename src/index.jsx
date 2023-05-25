import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const demo=ReactDOM.createRoot(document.getElementById("demo"))
demo.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)