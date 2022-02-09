import { useEffect, useContext } from 'react'
import RickAndMortyContext from '../../context/RickAndMortyContext'
import ResidentItem from './ResidentItem'

function ResidentList({ characterList }) {

    const { getCharacters, characters, loading } = useContext(RickAndMortyContext)

    useEffect(() => {
        getCharacters(characterList)
    }, [])

    if (!loading) {
        return (
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-5'>
                {characters !== undefined &&
                    characters.map((character) => (
                        <ResidentItem key={character.id} character={character} />
                    ))
                }

            </div>
        )
    } else {
        <p>Spinner</p>
    }

}

export default ResidentList
