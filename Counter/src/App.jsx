import { useState } from 'react'








import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 20)
      setCounter(counter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    // console.log("Counter Value: ", counter);
  }

  const removeValue = () => {
    if(counter > 0)
    setCounter(counter - 1);
    // console.log("Counter Value: ", counter);

  }


  return (
    <>
      
      <h1>Hello Adarsh</h1>
      <h3>Counter Value: {counter}</h3>
      
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
