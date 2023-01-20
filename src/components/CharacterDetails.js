import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function CharacterDetails(){

    const baseURL = "https://ih-crud-api.herokuapp.com/characters/"

    const [details, setDetails] = useState([]);
    // or const [details, setDetails] = useState(null);

    const { characterId } = useParams();

    const navigate = useNavigate();

    const deleteCharacter = () => {
        axios.delete(baseURL + characterId)
        .then(res => {
            navigate("/")
        })
        .catch((e) => {
            console.log("Error deleting the character from the API: ", e)
        })
    }

    useEffect(() => {
        axios.get(baseURL + characterId)
        .then((res) => {
            console.log(res.data)
            setDetails(res.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }, [])
    

    return(
        <div>
            <h1>{details.name}</h1>
            <p>Occupation: {details.occupation}</p>
            <p>Weapon: {details.weapon}</p>
            <p>Debt: {details.debt ? "Yes" : "No"}</p>
        </div>
    )

    // return (
    //     <>
    //     {details === null ? }

    //     </>
    // )
}