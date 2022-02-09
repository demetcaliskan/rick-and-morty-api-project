import { createContext, useReducer } from 'react'
import rickAndMortyReducer from './RickAndMortyReducer'

const RickAndMortyContext = createContext()

export const RickAndMortyProvider = ({ children }) => {

    const initialState = {
        locations: [],
        location: {},
        characters: [],
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

    const getCharacters = async (id_list) => {
        setLoading()

        const response = await fetch(`https://rickandmortyapi.com/api/character/${id_list}`)

        const data = await response.json()

        dispatch({
            type: 'GET_CHARACTERS',
            payload: data
        })
    }

    const clearCharacters = () => {
        dispatch({
            type: 'CLEAR_CHARACTERS'
        })
    }

    const setLoading = () => dispatch({ type: 'SET_LOADING' })


    return <RickAndMortyContext.Provider value={{
        locations: state.locations,
        location: state.location,
        characters: state.characters,
        loading: state.loading,
        getLocations,
        getLocation,
        getCharacters,
        clearCharacters,
        setLoading
    }}>
        {children}
    </RickAndMortyContext.Provider>
}

export default RickAndMortyContext