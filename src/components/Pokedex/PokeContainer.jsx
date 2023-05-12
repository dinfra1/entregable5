import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./styles/pokeContainer.css";
import Pokemon from "./Pokemon";
import Paginacion from "./Paginacion";

const PokeContainer = ({Type, setType}) => {

  const [Api, getApiPokemon] = useFetch(Type);
  const [ProducForPag, setProducForPag] = useState(50)
  const [PagAct, setPagAct] = useState(1)
  
  const lastIndex = PagAct * ProducForPag
  const firstIndex =  lastIndex - ProducForPag
  
  useEffect(() => {
    getApiPokemon();
  }, [Type]);

    const totalProduct = Api?.count


  return (
        <div className='pokedex--info'>
        {
          Api?.results
          ? (
            Api?.results.map((poke, index) => (
            <Pokemon
            key={index}
            poke={poke.url}
            />)).slice(firstIndex, lastIndex)
          )
          :(
            Api?.pokemon.map((objPoke, index)=>(
              <Pokemon 
              key={index}
              poke={objPoke.pokemon.url}
              />
            ))
          )
        }
         <Paginacion ProducForPag={ProducForPag} 
         PagAct={PagAct} 
         setPagAct={setPagAct} 
         totalProduct={totalProduct}/>
    </div>
  );
};

export default PokeContainer;
