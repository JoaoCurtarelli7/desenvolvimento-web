import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import DonorCreate from './pages/Donor/Register'
import DonorList from './pages/Donor/List'
import DonaratyList from './pages/Donatary/List'
import DonaratyCreate from './pages/Donatary/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },

      { path: 'donor', element: <DonorList /> },
      { path: 'donor-register/:id?', element: <DonorCreate /> },

      { path: 'donatary', element: <DonaratyList /> },
      { path: 'donatary-register/:id?', element: <DonaratyCreate /> },
    ],
  },
])

function AppRoutes() {
  return <RouterProvider router={router} />
}

export default AppRoutes
