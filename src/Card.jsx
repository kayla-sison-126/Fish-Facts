import React from "react";
import { flashcardsList } from './data.jsx'
import './Card.css'

const Card = (props) => {
    let currCard = flashcardsList[props.index];
    return (
        <div className="Card">
            <h4>Card No. {props.index + 1}</h4>
            <p>{currCard.question}</p>
            <br></br>
            <img src={currCard.photo} style={{height: '100px'}}/>
        </div>
    )
}

export default Card;