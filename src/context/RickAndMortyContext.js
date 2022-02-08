import { createContext, useReducer } from 'react'
import rickAndMortyReducer from './RickAndMortyReducer'

const RickAndMortyContext = createContext()

export const RickAndMortyProvider = ({ children }) => {

    const initialState = {
        locations: [],
        location: {},
        character: {},
        loading: false
    }

    const [state, dispatch] = useReducer(rickAndMortyReducer, initialState)

    const getLocations = async () => {

        setLoading()

        const response = await fetch(`https://rickandmortyapi.com/api/location`)

        const { results } = await response.json()

        dispatch({
            type: 'GET_LOCATIONS',
            payload: results
        })
    }

    const getLocation = async (id) => {
        setLoading()
        const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)

        const data = await response.json()

        dispatch({
            type: 'GET_LOCATION',
            payload: data
        })
    }

    const getCharacter = async (id) => {
        setLoading()

        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

        const character = await response.json()

        dispatch({
            type: 'GET_CHARACTER',
            payload: character
        })
    }

    const setLoading = () => dispatch({ type: 'SET_LOADING' })


    return <RickAndMortyContext.Provider value={{
        locations: state.locations,
        location: state.location,
        character: state.character,
        loading: state.loading,
        getLocations,
        getLocation,
        getCharacter,
        setLoading
    }}>
        {children}
    </RickAndMortyContext.Provider>
}

export default RickAndMortyContext