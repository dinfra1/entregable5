import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import HasError from '../components/Pokedex/HasError'
import PokeInfoCard from './PokeInfoCard'

const PokeInfo = () => {

    const {name} = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const [Api, getApiByName, hasError] = useFetch(url)

    useEffect(() => {
      getApiByName()
    }, [name])
    
    const navigate = useNavigate()

    const handlePoke = ()=>{
      navigate('/')
    }

  return (
    <div>
      <header>
        <div className='color--band--1'>
          <div className='color--red--1'>
          </div>
          <div className='cricle--1'>
            <img onClick={handlePoke} className='img--title--1' src="./img/home.png" alt="" />
            <img className='img--circle--1' src="./img/circle.png" alt="" />
          </div>
          <div className='color--black--1'></div>
          </div>
        </header>
      <div className='pokeinfo--'>
        {
         hasError
         ? <HasError /> 
          : <PokeInfoCard Api={Api}/>
       }
      </div>
    </div>
  )
}

export default PokeInfo