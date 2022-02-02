import { useState } from "react";
import axios from "axios";
import "./Pokedex.scss";

export default function Pokedex ()  {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    number: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    type: "",
  });

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemon({
          name: pokemonName,
          number: res.data.id,
          image: res.data.sprites.other.home.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          type: res.data.types[0].type.name,
        });
        setPokemonChosen(true);
      });
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokédex</h1>
        <input
          type="text"
          placeholder="Write a Pokémon"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
          value={pokemonName.toLowerCase()}
        />
        {pokemonName && <button onClick={searchPokemon}>Search Pokémon</button>}
      </div>

      <div className="DisplaySection">
        {!pokemonChosen ? (
          <h1>Please choose a Pokémon</h1>
        ) : (
          <>
            <h3>Number: #{pokemon.number}</h3>
            <h1>{pokemon.name}</h1>
            <div className="card">
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <h3>Type: {pokemon.type}</h3>
            <h4>Hp: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
            <h4>Speed: {pokemon.speed}</h4>
          </>
        )}
      </div>
    </div>
  );
};


