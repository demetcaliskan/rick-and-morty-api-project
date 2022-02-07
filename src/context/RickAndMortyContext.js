import { createContext, useReducer } from 'react'
import rickAndMortyReducer from './RickAndMortyReducer'

const RickAndMortyContext = createContext()

const API_URL = 'https://rickandmortyapi.com/api'

export const RickAndMortyProvider = ({ children }) => {

    const initialState = {
        locations: [],
        loading: false
    }

    const [state, dispatch] = useReducer(rickAndMortyReducer, initialState)

    const getLocations = async () => {
        setLoading()

        const response = await fetch(`${API_URL}/locations`)
        const { results } = await response.json()

        dispatch({
            type: 'GET_LOCATIONS',
            payload: results
        })
    }

    const setLoading = () => discpatch({ type: 'SET_LOADING' })


    return <RickAndMortyContext.Provider value={{
        locations: state.locations,
        loading: state.loading,
        getLocations
    }}>
        {children}
    </RickAndMortyContext.Provider>
}

export default RickAndMortyContext