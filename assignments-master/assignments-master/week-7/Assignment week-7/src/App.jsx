import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from '../components/Assignment-1/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card />
    </>
  )
}

export default App
