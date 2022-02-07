import LocationItem from './LocationItem'

function LocationList() {

    const locations = [1, 2, 3]

    return (
        <div>
            {locations.map((location) => (
                <LocationItem location={location} />
            ))}
        </div>
    )
}

export default LocationList
