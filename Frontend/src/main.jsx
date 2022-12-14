import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Sidebar from "./Sidebar"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Sidebar />
  </React.StrictMode>,
)
