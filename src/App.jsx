import './App.css';
import Card from './Card'
import { useState } from 'react';
import { flashcardsList } from './data.jsx';


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

  // set the initial ordering of the cards (numerical/non-shuffled)
  const [shuffledIndices, setShuffledIndices] = useState(([0,1,2,3,4,5,6,7,8,9]));

  // manual shuffle (for the shuffle button)
  const shuffleButton = () => {
    shuffleCards();
    setIndex(0);
    giveFeedback("");
  }

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
    giveFeedback("");
  }

  const decIndex = () => {
    if (index > 0) {
      setFlip(false);
      setIndex(index - 1);
    }
    giveFeedback("");
  }
  const toggleFlip = () => {
    setFlip(!flipped);
  }

  // for the text input


  const [inputValue, setInputValue] = useState('');

  // Handle change in input field
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = () => {
    const currCard = flashcardsList[shuffledIndices[index]];
    const correctAnswer = currCard.answer;
    if(inputValue.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      giveFeedback("Correct");
    } else {
      giveFeedback("Incorrect");
    }
    setInputValue(''); // reset input field
  }

  const [feedback, setFeedback] = useState('');

  const giveFeedback = (message) => {
    setFeedback(message);
  };

  //

  return (
    <div className="App">
        <div className="header">
          <h2>~ ˚.⋆ fish facts ! ⋆.˚ ~</h2>
          <h3>test your fish knowledge with this fun question set! :)</h3>
          <p>{index+1} of 10</p>
        </div>

        <div className="cardRow">

          <button className="button" onClick={decIndex}>🡐</button>      
          <div className="card" onClick={toggleFlip}>
            <Card index={shuffledIndices[index]} flipped={flipped} feedback={feedback}/>
          </div>
          <button className="button" onClick={updateIndex}>🡒</button>      
        
        </div>


        <div className="inputField">
          <button id="shuffle-button"className="button" onClick={shuffleButton} title="Shuffle and restart round">Shuffle</button>      
          <input id="answerBox"
            type="text"
            placeholder="Type your answer here..."
            value={inputValue} 
            onChange={handleChange} 
            />

          <button
            id="submit-button"
            className="button"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>

        <div className="info">
          <h4>Times studied: {cycleCount}</h4>
        </div>
    </div>
  )
}

export default App