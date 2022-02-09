import { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import RickAndMortyContext from '../context/RickAndMortyContext'
import ResidentList from '../components/residents/ResidentList'

function Residents() {

    const { getLocation, location } = useContext(RickAndMortyContext)

    const params = useParams()

    useEffect(() => {
        getLocation(params.id)
    }, [])

    const { residents } = location

    const characterList = []

    residents !== undefined &&
        residents.forEach((resident) => {
            characterList.push(parseInt(resident.substring(42)))
        })

    return (
        <div className="bg-violet-100">
            <ResidentList characterList={characterList} />
        </div>
    )
}

export default Residents
