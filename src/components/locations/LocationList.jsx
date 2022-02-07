import LocationItem from './LocationItem'

function LocationList() {

    const locations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className='grid grid-rows-1 grid-flow-row auto-rows-max gap-4 justify-items-center p-5 px-20'>
            {locations.map((location) => (
                <LocationItem location={location} />
            ))}
        </div>
    )
}

export default LocationList
