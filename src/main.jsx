import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <div className='max-w-6xl mx-auto ml-96 mt-20'>
    <StrictMode>
      <App />
    </StrictMode>,
  </div>

)
