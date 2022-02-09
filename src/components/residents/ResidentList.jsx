import { useEffect, useContext, useState } from 'react'
import RickAndMortyContext from '../../context/RickAndMortyContext'
import ResidentItem from './ResidentItem'

function ResidentList({ characterList }) {

    const { getCharacters, characters } = useContext(RickAndMortyContext)

    useEffect(() => {
        getCharacters(characterList)
    }, [])

    return (
        <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-5'>
            {characters !== undefined &&
                characters.map((character, index) => (
                    <ResidentItem key={index} character={character} />
                ))
            }

        </div>
    )
}

export default ResidentList
