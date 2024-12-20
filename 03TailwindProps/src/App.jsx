import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let obj = {
    name: 'gaurnag',
    age:20
  }
  return (
    <>
      <h1 className='bg-red-100 text-black p-4 rounded-xl'>Hello Tailwind</h1>
      <Card myName="Gaurang" myObj={obj} />
    </>
  )
}

export default App
