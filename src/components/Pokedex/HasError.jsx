import { useSelector } from "react-redux"

const HasError = () => {

    const {trainerName}= useSelector(state => state)

  return (
    <div>
        <h2>Hello {trainerName} el pokemon que intentas buscar no existe o esta mal escrito</h2>
    </div>
  )
}

export default HasError