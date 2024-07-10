import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import GenerateHeader from './components/Header/Header';
import GenerateBody from './pages/MainPage/Body';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GenerateHeader />
      <GenerateBody />
    </div>
  )
}

export default App
