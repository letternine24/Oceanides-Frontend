import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';
import GenerateBody from './pages/MainPage/Body';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <GenerateBody />
    </div>
  )
}

export default App
