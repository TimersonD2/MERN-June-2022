import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [pokemon, setPokemon] = useState([]);
  // https://pokeapi.co/api/v2/pokemon/ditto

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((res) => res.json())
      .then((result) => setPokemon(result.results))
      .catch((err) => console.log("Error is: ", err))
  }, []);

  return (
    <div className="App">
      <h1>Pokemon API App</h1>
      {pokemon.map((item, index) => (
        <div key={index}>
          <li>{item.name}</li>
        </div>
      ))}

    </div>
  );
}

export default App;
