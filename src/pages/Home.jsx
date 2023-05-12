import FormNameUse from '../components/home/FormNameUse'
import './styles/home.css'
const Home = () => {
   
  return (
    <div className='container--home'>
        <article className='img--title'>
            <img  src='./img/home.png' alt="" />
        </article>
        <div className='welcome--trainer'>
            <h2 className='subtitle--trainer'>¡Hello Trainer!</h2>
            <p>Plase give us your name to star</p>
            <FormNameUse />
        </div>
        <div className='color--band'>
          <div className='color--red'>
          </div>
          <div className='cricle'>
            <img className='img--circle' src="./img/circle.png" alt="" />
          </div>
          <div className='color--black'></div>
        </div>
    </div>
  )
}

export default Home