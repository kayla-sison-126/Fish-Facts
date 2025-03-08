import './App.css';
import Card from './Card'
import { useState } from 'react';


const App = () => {
  const [index, setIndex] = useState(0);
  const [cycleCount, setCount] = useState(0);
  const [flipped, setFlip] = useState(false);
  
  const shuffleCards = () => {
    const indices = [0,1,2,3,4,5,6,7,8,9];
    const shuffled = shuffleArray(indices);
    setShuffledIndices(shuffled);
  };
  
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // initial shuffling of the cards
  const [shuffledIndices, setShuffledIndices] = useState(shuffleArray([0,1,2,3,4,5,6,7,8,9]));


  const updateIndex = () => {
    if (index+1 <= 9) {
      setFlip(false);
      setIndex(index + 1);
    } else {
      setFlip(false);
      setIndex(0);
      setCount(cycleCount+1);
      shuffleCards();
    }
  }

  const decIndex = () => {
    if (index > 0) {
      setFlip(false);
      setIndex(index - 1);
    }
  }
  const toggleFlip = () => {
    setFlip(!flipped);
  }

  return (
    <div className="App">
        <div className="header">
          <h2>~ ˚.⋆ fish facts ! ⋆.˚ ~</h2>
          <h3>test your fish knowledge with this fun question set! :)</h3>
        </div>

        <div className="card" onClick={toggleFlip}>
          <Card index={shuffledIndices[index]} flipped={flipped} />
        </div>

        <div className="buttons">
          <button onClick={decIndex}>Back</button>      
          <button onClick={updateIndex}>Next</button>      
        </div>

        <div className="info">
          <p>{index+1} of 10</p>
          <h4>Times studied: {cycleCount}</h4>
        </div>
    </div>
  )
}

export default App