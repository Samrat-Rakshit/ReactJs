import './App.css';
import {useState} from 'react'
function App() {
  
  let [counter,settCounter] = useState(0)
  //let counter = 5
  const addvalue = ()=>{
     settCounter(counter+1)
     console.log("clicked",counter) 
  }
  const removevalue = () =>{
    settCounter(counter-1);
    console.log("clicked",counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br/>
      <button onClick={removevalue}>remove value</button>
    </>
  );
}

export default App;
