import React, { useRef } from 'react'
import { setTrainerName } from '../../slices/trainerName.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import  "./styles/formNameUser.css"
const FormNameUse = () => {

    const dispatch = useDispatch()
    const inputName = useRef()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <form className='form--home' onSubmit={handleSubmit}>
        <input className='input--home' ref={inputName} type="text" placeholder='ENTER YOUR NAME' />
        <button className='buttom--home'>¡GO!</button>
    </form>
  )
}

export default FormNameUse