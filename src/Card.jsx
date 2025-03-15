import React from "react";
import { flashcardsList } from './data.jsx'
import './Card.css'

const Card = (props) => {
    let currCard = flashcardsList[props.index];
    if (!props.flipped) { /* front of card */

        return (
            <div className="Card">
                <br></br>
                <h3>Question No. {currCard.number}</h3>
                <h4>{currCard.question}</h4>
                <br></br>
                <img src={'https://cdn3.emoji.gg/emojis/think_fish.png'} style={{height: '70px'}}/>
                <br></br>
                <p className={'difficulty' + currCard.difficulty}>Difficulty: {currCard.difficulty}</p>
                <div className={'feedback' + props.feedback}>
                    <h3>{props.feedback}</h3>
                </div>
                      </div>
        )
    } else { /* back of card */

        return (
            <div className="Card">
                <br></br>
                <br></br>
                <h3>Answer: {currCard.answer}</h3>
                <br></br>
                <img src={currCard.photo} style={{height: '100px'}}/>
            </div>
        )
    }

}

export default Card;