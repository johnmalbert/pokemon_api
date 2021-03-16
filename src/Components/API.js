import React, {useState, useEffect} from 'react'
import axios from 'axios';

const API = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchData = () => {
        console.log("fetching");
        
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
        .then(response => { 
            setPokemon(response.data.results);
            console.log(response.data.results);
            })
            .catch(() => console.log("Data didn't come back"));
    }
    return (
        <div>
            <div className="container p-5 text-center">
            <button onClick={fetchData} className="btn btn-primary m-4">Go Catch 'Em All</button>
                <div className="row">

                {
                    pokemon.map( (character, i) =>
                    <div className="col-sm-2 m-1"><p key={i}>{i+1}: <strong>{character.name.toUpperCase()}</strong></p></div>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default API
