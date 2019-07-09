import React from 'react';
import Starship from './Starship';

const StarshipList = (people) => {
  const starshipComponent = people.starships.map((starship, i) => {
    return (
      <Starship>{starship[i]}</Starship>
    )
  })

  return (
    <div>
      {starshipComponent}
    </div>
  )
}

export default StarshipList;