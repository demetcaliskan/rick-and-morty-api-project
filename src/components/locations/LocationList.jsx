import { useContext, useEffect } from 'react'
import LocationItem from './LocationItem'
import RickAndMortyContext from '../../context/RickAndMortyContext'

function LocationList() {

    const { getLocations, locations, clearCharacters, loading } = useContext(RickAndMortyContext)

    useEffect(() => {
        clearCharacters()
        getLocations()
    }, [])

    if (!loading) {
        return (
            <div className='grid grid-rows-1 grid-flow-row auto-rows-max gap-4 justify-items-center p-5 px-20'>
                {locations !== undefined &&
                    locations.map((location) => (
                        <LocationItem key={location.id} location={location} />
                    ))}
            </div>
        )
    } else {
        return <p>Spinner</p>
    }


}

export default LocationList
