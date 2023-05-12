import './styles/pokeinfcard.css'

const PokeInfoCard = ({ Api }) => {
 

    return (
        <article className='pokecard '>
            <header className={`pokecard--header bg-${Api?.types[0].type.name}`}>
                <img className='pokecard--img' src={Api?.sprites.other.dream_world.front_default} alt="imagenPokemon" />
            </header>
            <section className='pokecard--seccion'>
                <h2 className={`pokecard--id color-${Api?.types[0].type.name}`}>#{Api?.id}</h2>
                <h1 className={`pokecard--name color-${Api?.types[0].type.name}`}>{Api?.name}</h1>
                <ul className='pokecard--infopoke'>
                    <li className='pokecard--item-value'><span className='pokecard--span'>Peso</span>{Api?.weight}</li>
                    <li className='pokecard--item-value'><span className='pokecard--span'>Height</span>{Api?.height}</li>
                </ul>
                <div className='pokecard--abilityandtype'>
                    <div className='pokecard--main-type'>
                    <h2 className='pokecard--name-type '>Type</h2>
                    <ul className='pokecard--type'>
                        {
                            Api?.types.map((type, index) => (
                                <li className='pokecard--item-type' key={index}>{type.type.name}</li>
                            ))
                        }
                    </ul>
                    </div>
                    <div className='pokecard--main-ability'>
                    <h2 className='pokecard--name-ability'>Ability</h2>
                    <ul className='pokecard--ability'>
                        {
                            Api?.abilities.map((ability, index) => (
                                <li className='pokecard---item--type-ability' key={index}>{ability.ability.name}</li>
                            ))
                        }
                    </ul>
                    </div>
                </div>
                <h3 className='pokecard--statename'>State</h3>
                <ul className='pokecard--state'>
                    {
                        Api?.stats.map((stat, index) => (
                            <li className='pokecard--item-state' key={index}><span className='pokecard--span-state'>{stat.stat.name}</span>{stat.base_stat}/150</li>
                        ))
                    }
                </ul>
                </section>
                <h2 className='pokecard--moviment--name'>Movements</h2>
                <div className='pokecard--moviments'>
                    <ul className='pokecard--moviment--item '>
                        {
                            Api?.moves.map((move, index) => (
                                <li className={`pokecard--item--moviment bg-${Api?.types[0].type.name}`} key={index}>{move.move.name}</li>
                            ))
                        }
                    </ul>
                </div>
        </article>
    )
}

export default PokeInfoCard