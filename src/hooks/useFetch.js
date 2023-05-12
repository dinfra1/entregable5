import axios from "axios"
import {useState } from "react"

const useFetch = url =>{
    const [Api, setApi] = useState()
    const [hasError, setHasError] = useState(false)

    const getApi = ()=>{
        axios.get(url)
        .then(res=>{
            setApi(res.data)
            setHasError(false)
        })
        .catch(erro=>{
            console.log(erro)
            setHasError(true)
        })
        
    }
    
    
    return [Api,getApi, hasError]   
}
export default useFetch