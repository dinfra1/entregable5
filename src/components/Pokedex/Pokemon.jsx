import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./styles/pokemon.css"
import { useNavigate } from "react-router-dom";

const Pokemon = ({poke}) => {

    const [Api, getApiPokemon]= useFetch(poke)

    const navigate = useNavigate()

    useEffect(() => {
      getApiPokemon()
    }, [poke])

    const handleClick = ()=>{
      navigate(`/pokedex/${Api?.name}`)
    }

  return (
    <article onClick={handleClick} className={`poke--containe bg-${Api?.types[0].type.name}`}>
      <header className="poke--header">
        <img
          className="img--poke"
          src={Api?.sprites.other.dream_world.front_default
            ? Api?.sprites.other.dream_world.front_default 
            : Api?.sprites.other['official-artwork'].front_default}
          alt="img_pokemon"
        />
      </header>
      <section className="poke--info">
        <h3 className={`poke--name color-${Api?.types[0].type.name}`}>
          {Api?.name.toUpperCase()}
        </h3>
        <h4 className="poke--info--type">
          {" "}
          {Api?.types.length === 2
            ? `${Api?.types[0].type.name} / ${Api?.types[1].type.name}`
            : `${Api?.types[0].type.name}`}
          <span className="type--pokemon">Type</span>
        </h4>
        <hr />
        <ul className="poke--state">
          <li className="pokemon--value">
            <span className="state--span">Hp</span> {Api?.stats[0].base_stat}
          </li>
          <li className="pokemon--value">
            <span className="state--span">Ataque</span>{" "}
            {Api?.stats[1].base_stat}
          </li>
          <li className="pokemon--value">
            <span className="state--span">Defensa</span>{" "}
            {Api?.stats[2].base_stat}
          </li>
          <li className="pokemon--value">
            <span className="state--span">Velocidad</span>{" "}
            {Api?.stats[5].base_stat}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Pokemon;
