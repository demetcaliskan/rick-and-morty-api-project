import { createContext, useReducer } from 'react'
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

        const response = await fetch(`https://rickandmortyapi.com/api/location`)

        const { results } = await response.json()

        dispatch({
            type: 'GET_LOCATIONS',
            payload: results
        })
    }

    const getCharacters = async (location_id) => {

        setLoading()

        let arr = [];

        const response = await fetch(
            `https://rickandmortyapi.com/api/location/${location_id}`,
        );

        const { residents } = await response.json();

        console.log(residents)

        residents?.map(async (resident) => {
            const res = await fetch(resident);
            const obj = await res.json();
            arr.push(obj)
        });

        console.log(arr)

        dispatch({
            type: 'GET_CHARACTERS',
            payload: arr
        })
    };

    // const getCharacters = async (id_list) => {
    //     setLoading()

    //     const response = await fetch(`https://rickandmortyapi.com/api/character/${id_list}`)

    //     const data = await response.json()

    //     dispatch({
    //         type: 'GET_CHARACTERS',
    //         payload: data
    //     })
    // }

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