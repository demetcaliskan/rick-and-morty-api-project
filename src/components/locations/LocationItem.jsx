import React from 'react'

function LocationItem({ location: { type, dimension, residents } }) {
    return (
        <div className='min-w-full card shadow-xl rounded-md bg-violet-300 p-5'>
            <div>
                <h3> Location Type: {type}</h3>
                <h3> Dimension: {dimension}</h3>
                <h3>Resident Count: {residents.length} </h3>

            </div>

        </div>
    )
}

export default LocationItem
