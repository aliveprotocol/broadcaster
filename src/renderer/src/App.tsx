import Navbar from './components/Navbar'
import LoginPage from './components/pages/Login'

const App = (): JSX.Element => {
  return (
    <Navbar>
      <LoginPage />
    </Navbar>
  )
}

export default App
