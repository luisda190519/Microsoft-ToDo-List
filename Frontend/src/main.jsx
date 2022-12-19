import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Sidebar from "./Views/Sidebar"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar />
    <App />
  </React.StrictMode>,
)
