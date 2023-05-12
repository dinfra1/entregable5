import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const FormPoke = ({setType, urlbase})=> {


    const inputPoke = useRef()

    const navigate = useNavigate()

    const url = `https://pokeapi.co/api/v2/type/`
    const [types, getOnType] = useFetch(url)

    useEffect(() => {
      getOnType()
    }, [])
    

    const handleSubmit = e =>{
        e.preventDefault()
        const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
        navigate(path)
    }

    const handleChange = (e)=>{
        setType(e.target.value)
    }

  return (
    <div className=''>
        <form onSubmit={handleSubmit}>
            <input ref={inputPoke} type='text' />
            <button>Search</button>
        </form>
        <select onChange={handleChange}>
            <option value={urlbase}>AllPokemos</option>
            {
                types?.results.map((type,index)=>(
                    <option 
                    key={index} 
                    value={type.url}>
                    {type.name}
                    </option>
                ))
            }
        </select>
    </div>
  )
}

export default FormPoke