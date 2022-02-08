import { createContext, useReducer } from 'react'
import rickAndMortyReducer from './RickAndMortyReducer'

const RickAndMortyContext = createContext()

export const RickAndMortyProvider = ({ children }) => {

    const initialState = {
        locations: [],
        loading: false
    }

    const [state, dispatch] = useReducer(rickAndMortyReducer, initialState)

    const getLocations = async () => {

        setLoading()

        const response = await fetch(`https://rickandmortyapi.com/api/location`)

        const { results } = await response.json()
        console.log(results)

        dispatch({
            type: 'GET_LOCATIONS',
            payload: results
        })
    }

    const setLoading = () => dispatch({ type: 'SET_LOADING' })


    return <RickAndMortyContext.Provider value={{
        locations: state.locations,
        loading: state.loading,
        getLocations,
        setLoading
    }}>
        {children}
    </RickAndMortyContext.Provider>
}

export default RickAndMortyContext