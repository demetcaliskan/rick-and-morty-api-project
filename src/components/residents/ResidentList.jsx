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


    if (readyForRender && !loading && characters.length <= 0) {
        return (
            <div className='card shadow-xl rounded-md bg-violet-900 p-5 m-8'>
                <h2 className='font-mono font-bold text-xl text-white'>There is no resident living here!</h2>
            </div>
        )
    } else if (!loading && readyForRender) {
        return (
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-5'>
                {
                    characters !== undefined && characters.map((character) => (
                        <ResidentItem key={character.id} character={character} />
                    ))
                }

            </div>
        )
    }

    else {
        return <Spinner />
    }




}



export default ResidentList
