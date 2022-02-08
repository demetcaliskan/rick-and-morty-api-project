import { useContext, useEffect } from 'react'
import LocationItem from './LocationItem'
import RickAndMortyContext from '../../context/RickAndMortyContext'

function LocationList() {

    const { getLocations, locations } = useContext(RickAndMortyContext)

    useEffect(() => {
        getLocations()
    }, [])

    console.log(locations)

    return (
        <div className='grid grid-rows-1 grid-flow-row auto-rows-max gap-4 justify-items-center p-5 px-20'>
            {locations.map((location) => (
                <LocationItem key={location.id} location={location} />
            ))}
        </div>
    )
}

export default LocationList
