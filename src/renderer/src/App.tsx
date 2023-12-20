import { createHashRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPage from './components/pages/Login'

const router = createHashRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <LoginPage />
      }
    ]
  }
])

const App = (): JSX.Element => {
  return <RouterProvider router={router} />
}

export default App
