import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
  const cardComponent = people.map((person, i) => {
    return (
      <Card key={people[i].url} name={people[i].name} birthYear={people[i].birth_year} starships={people[i].starships[0]} />
    )
  })
  return (
    <div>
      {cardComponent}
    </div>
  );
}

export default CardList;