import React from 'react';
import './Card.css';

const Card = ({ name, birthYear, starships }) => {
  return (
    <div className="card dib ma2 grow bw2 shadow-3">
      <div>
        <h2 className="f2">{name}</h2>
        <hr></hr>
        <h3 className="f3">Vitals</h3>
        <ul>
          <li><span className="b">Born:</span>{birthYear}</li>
          <li><span className="b">Homeworld:</span> Tatooine</li>
          <li><span className="b">Species:</span> Human</li>
        </ul>
        <h3>Starships</h3>
        <ul>
          <li>{starships}</li>
        </ul>
      </div>
    </div>
  )
}

export default Card;