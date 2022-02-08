import { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResidentList from '../components/residents/ResidentList'
import RickAndMortyContext from '../context/RickAndMortyContext'

function Residents() {

    const { getLocation, location } = useContext(RickAndMortyContext)

    const params = useParams()

    useEffect(() => {
        getLocation(params.id)
    }, [])

    const { residents } = location

    return (
        <div className="bg-violet-100">
            <ResidentList residents={residents} />
        </div>
    )
}

export default Residents
