import React, { useEffect, useState} from 'react'
import PokeContainer from '../components/Pokedex/PokeContainer'
import { useSelector } from 'react-redux'
import  './styles/pokedex.css'
import FormPoke from '../components/Pokedex/FormPoke'
import Paginacion from '../components/Pokedex/Paginacion'

const Pokedex = () => {

    const {trainerName} = useSelector(state => state)
    const urlbase = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
    const [Type, setType] = useState(urlbase)
    


  return (
    <div className='pokedex--home'>
      <div className='color--band--1'>
          <div className='color--red--1'>
          </div>
          <div className='cricle--1'>
            <img className='img--title--1' src="./img/home.png" alt="" />
            <img className='img--circle--1' src="./img/circle.png" alt="" />
          </div>
          <div className='color--black--1'></div>
        </div>
      <div className='pokedex--title'>
        <h3 className='pokedex--h1'>Hello <span className='title--span'>{trainerName.toUpperCase()}</span>, here you can find your favorite pokemon</h3>
      <FormPoke setType={setType} urlbase={urlbase}/>
        </div>
        <PokeContainer Type={Type} setType={setType}/>
        </div>
  )
      }
export default Pokedex