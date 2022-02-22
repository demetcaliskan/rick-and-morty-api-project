import { createContext, useReducer } from 'react'
import axios from 'axios'
import rickAndMortyReducer from './RickAndMortyReducer'

const RickAndMortyContext = createContext()

export const RickAndMortyProvider = ({ children }) => {

    const initialState = {
        locations: [],
        characters: [],
        loading: false
    }

    const [state, dispatch] = useReducer(rickAndMortyReducer, initialState)

    const getLocations = async () => {

        setLoading()

        const res = await axios.get(`https://rickandmortyapi.com/api/location`)
        console.log(res.data.results)

        // const response = await fetch(`https://rickandmortyapi.com/api/location`)

        // const { results } = await response.json()

        dispatch({
            type: 'GET_LOCATIONS',
            payload: res.data.results
        })
    }

    const getCharacters = async (location_id) => {

        setLoading()

        // const response = await fetch(
        //     `https://rickandmortyapi.com/api/location/${location_id}`,
        // )

        const resp = await axios.get(`https://rickandmortyapi.com/api/location/${location_id}`)
        const resArr = resp.data.residents

        const ar = await axios.all(resArr.map(async (r) => {
            const x = await axios.get(r)
            return x.data
        }))

        console.log(ar)

        // const { residents } = await response.json()

        // const arr = await Promise.all(residents.map(async (resident) => {
        //     const res = await fetch(resident)
        //     return await res.json()
        // }))
        // console.log(arr)

        dispatch({
            type: 'GET_CHARACTERS',
            payload: ar
        })

    };

    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return <RickAndMortyContext.Provider value={{
        locations: state.locations,
        characters: state.characters,
        loading: state.loading,
        getLocations,
        getCharacters,
        setLoading
    }}>
        {children}
    </RickAndMortyContext.Provider>
}

export default RickAndMortyContext