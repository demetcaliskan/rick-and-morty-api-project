import { FcNightLandscape } from "react-icons/fc"
import { Link } from 'react-router-dom'

function LocationItem({ location: { id, type, dimension, residents } }) {

    return (
        <div className='min-w-full card shadow-xl rounded-md bg-violet-300 p-5 xl:flex xl:justify-between lg:flex lg:justify-between md:grid md:justify-items-center sm:grid sm:justify-items-center sm:place-items-center shadow-indigo-600/50'>
            <div className='flex flex-row'>
                <div>
                    <FcNightLandscape className='h-20 w-20 pr-10' />
                </div>
                <div>
                    <div className='flex flex-row gap-4'>
                        <h3 className='font-extrabold'>Location Type:</h3>
                        <h3 className='font-black italic text-teal-700 text-lg'>{type}</h3>
                    </div>
                    <div>
                        <h3> <b>Dimension: </b> {dimension}</h3>
                        <h3> <b>Resident Count: </b> {residents.length} </h3>
                    </div>
                </div>
            </div>

            <div className='py-3'>
                <Link
                    to={`location/${id}/residents`}
                    className='font-mono p-3 rounded-md text-lg text-teal-500 shadow-xl shadow-green-600/40 font-small transition duration-500 ease-in-out bg-gray-900 hover:bg-violet-900 transform hover:-translate-y-1 hover:scale-110'
                >
                    Show Residents
                </Link>
            </div>
        </div>
    )
}

export default LocationItem
