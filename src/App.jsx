import './App.css';
import Card from './Card'
import { useState } from 'react';


const App = () => {
  const [index, setIndex] = useState(0);
  const [cycleCount, setCount] = useState(0);

  const updateIndex = () => {
    if (index+1 <= 9) {
      setIndex(index + 1);
    } else {
      setIndex(0);
      setCount(cycleCount+1);
    }
  }

  return (
    <div className="App">
        <div className="header">
          <h2>fast fish facts !</h2>
          <h3>~ test your fish knowledge ~</h3>
        </div>

        <div className="card">
          <Card index={index}/>
        </div>

        <button onClick={updateIndex}>Next</button>
        <p>{index+1} of 10</p>
        <p>Times studied: {cycleCount}</p>
    </div>
  )
}

export default App