import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);
  // https://pokeapi.co/api/v2/pokemon/ditto

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    //   .then((res) => res.json())
    //   .then((result) => setPokemon(result.results))
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response) => {setPokemon(response.data.results)})
      .catch((err) => console.log("Error is: ", err))
  }, []);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      {
        pokemon.map((item, index) => (
          <div key={index}>
            <li>{item.name}</li>
          </div>
        ))
      }
    </div>
  );
}

export default App;
