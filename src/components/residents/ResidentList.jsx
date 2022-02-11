import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import RickAndMortyContext from '../../context/RickAndMortyContext'
import ResidentItem from './ResidentItem'

function ResidentList() {

    const { characters, getCharacters, locations, loading } = useContext(RickAndMortyContext)

    const params = useParams()

    const { residents } = locations[parseInt(params.id) - 1]

    const charIDList = []

    residents.forEach(resident => {
        charIDList.push(parseInt(resident.substring(42)))
    })

    useEffect(() => {
        getCharacters(charIDList)
    }, [])

    console.log(characters)

    if (charIDList.length <= 0) {
        return (
            <div>
                <p>There is no resident living here!</p>
            </div>
        )
    } else if (!loading && characters.length > 1) {
        return (
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-5'>
                {
                    characters !== undefined && characters.map((character) => (
                        <ResidentItem key={character.id} character={character} />
                    ))
                }

            </div>
        )
    } else if (!loading) {
        return <ResidentItem key={characters.id} character={characters} />
    }
    else {
        return <p>Spinner</p>
    }




}



export default ResidentList
