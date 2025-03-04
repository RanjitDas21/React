import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }
  }

  // const addValue = () => {
  //   if(counter < 30){
  //     setCounter((prevCounter) => prevCounter + 1);
  //     setCounter((prevCounter) => prevCounter + 1);
  //     setCounter((prevCounter) => prevCounter + 1);
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }
  // }


  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
