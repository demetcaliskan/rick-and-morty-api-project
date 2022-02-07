import React from 'react'

function LocationItem({ location }) {
    return (
        <div className='min-w-full card shadow-xl rounded-md bg-violet-300 p-5'>
            <div>
                <p>This is a location item.</p>
                {location}
                <h6>Hellloooo</h6>
            </div>

        </div>
    )
}

export default LocationItem
