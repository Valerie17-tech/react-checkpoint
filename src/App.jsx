import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Body from './components/Body'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Body />
      <Form />
    </div>
  )
}

export default App
