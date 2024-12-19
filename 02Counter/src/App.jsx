import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 14;
  let [counter, setCounter] = useState(14);

  const addValue = () => {
    if(counter >= 20) {
      throw new Error("Cannot increase");
    }
    setCounter(counter + 1);
  }

  const removeValue = () => {
    if(counter == 0) {
      throw new Error("Cannot decrease");
    }
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Hexxa protocol</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
