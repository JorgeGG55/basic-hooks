import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';

export const CharacterList = () => {

const [characterList, setCharactersList] = useState([]);

useEffect(()=>{
    (async ()=> {
      const data = await fetch('https://rickandmortyapi.com/api/character').then(
        (response) => response.json()
      );
      setCharactersList(data.results)
    })();

  }, [])

  return (
    <>
      {characterList.map((character) => (
          <Card key={character.id} character={character}/>
        ))}
    </>
  )
}
