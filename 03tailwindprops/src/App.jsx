import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Demo from './components/Demo'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-400
                    text-blue
                    p-4
                    rounded-xl
                    mb-4'>
                      Tailwind Test</h1>
                      <Card username="Samrat" btnText="click me"/>
                      <Card username="Rakshitt" />
                      <Demo arr={newArr}/>
    </>
  )
}

export default App
