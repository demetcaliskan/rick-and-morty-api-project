import { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import RickAndMortyContext from '../../context/RickAndMortyContext'
import ResidentItem from './ResidentItem'
import Spinner from '../layout/Spinner'

function ResidentList() {

    const { getCharacters, characters, loading } = useContext(RickAndMortyContext)

    const params = useParams()

    const [readyForRender, setReadyForRender] = useState(false)

    useEffect(() => {
        getCharacters(params.id)
        setReadyForRender(true)
    }, [])

    console.log(characters)
    characters !== [] && console.log(characters.length)

    characters !== undefined && characters.map((character) => (
        // <ResidentItem key={character.id} character={character} />
        character !== undefined && console.log(character)
    ))

    characters !== [] && console.log('character 0: ', characters[0])


    if (readyForRender && !loading) {
        return (
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-5'>
                {
                    characters && characters.length > 0 && characters.map((character) => (
                        // <ResidentItem key={character.id} character={character} />
                        console.log(character)
                    ))
                }

            </div >
        )
    } else {
        return (
            <p>Not ready.</p>
        )
    }


    // if (readyForRender && !loading && characters.length <= 0) {
    //     return (
    //         <div>
    //             <p>There is no resident living here!</p>
    //         </div>
    //     )
    // } else if (!loading && readyForRender && characters.length > 1) {
    //     return (
    //         <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-5'>
    //             {
    //                 characters !== undefined && characters.map((character) => (
    //                     <ResidentItem key={character.id} character={character} />
    //                 ))
    //             }

    //         </div>
    //     )

    // } else if (!loading && readyForRender && characters !== undefined) {
    //     return <ResidentItem key={characters.id} character={characters} />
    // }
    // else {
    //     return <Spinner />
    // }




}



export default ResidentList
