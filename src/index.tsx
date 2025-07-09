import './index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes'


createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
