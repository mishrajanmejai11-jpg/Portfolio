
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Mainpage from './Components/Main_page.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   
    <App/>
  </BrowserRouter>
  ,
)
