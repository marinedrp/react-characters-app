import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const [listOfCharacters, setListOfCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-crud-api.herokuapp.com/characters")
      .then((res) => {
        let firstTenCharacters = res.data.slice(0, 10)
        setListOfCharacters(firstTenCharacters);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const deleteCharacter = (characterToDelete) => {
    const newListOfCharacters = listOfCharacters.filter((character) => {
        return character.name !== characterToDelete
    })
    setListOfCharacters(newListOfCharacters)
  }

  return (
    <div>
      {listOfCharacters.map((character, index) => {
        return (
          <div className="character" key={index}>
            <p><b>Number: {index + 1}</b></p>
            <p><b>Name:</b> {character.name}</p>
            <p><b>Occupation:</b> {character.occupation}</p>
            <p><b>Weapon:</b> {character.weapon}</p>
            <Link to={"/character/" + character.id}>More Details</Link>
            <button onClick={() => {deleteCharacter(character.name)}}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
