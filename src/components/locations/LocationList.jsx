import { useContext, useEffect } from 'react'
import RickAndMortyContext from '../../context/RickAndMortyContext'
import LocationItem from './LocationItem'
import Spinner from '../layout/Spinner'

function LocationList() {

    const { getLocations, locations, loading } = useContext(RickAndMortyContext)

    useEffect(() => {
        if (locations.length === 0) {
            getLocations()
        }
    }, [])

    if (!loading) {
        return (
            <div className='grid grid-rows-1 grid-flow-row auto-rows-max gap-8 justify-items-center p-5 px-20 font-mono'>
                {locations !== undefined &&
                    locations.map((location) => (
                        <LocationItem key={location.id} location={location} />
                    ))}
            </div>
        )
    } else {
        return <Spinner />
    }


}

export default LocationList
