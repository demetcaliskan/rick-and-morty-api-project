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

        try {
            dispatch({ type: 'GET_LOCATIONS_REQUEST' })
            const res = await axios.get(`https://rickandmortyapi.com/api/location`)
            dispatch({
                type: 'GET_LOCATIONS_SUCCESS',
                payload: res.data.results
            })

        } catch (error) {
            dispatch({
                type: "GET_LOCATIONS_FAIL",
                error: error,
            });
        }
    }

    const getCharacters = async (location_id) => {

        try {
            dispatch({
                type: "GET_ALL_CHARACTERS_REQUEST",
            });
            const resp = await axios.get(
                `https://rickandmortyapi.com/api/location/${location_id}`
            );
            const resArr = resp.data.residents;

            const ar = await axios.all(
                resArr.map(async (r) => {
                    const x = await axios.get(r);
                    return x.data;
                })
            );

            dispatch({
                type: "GET_ALL_CHARACTERS_SUCCESS",
                payload: ar,
            });
        } catch (error) {
            dispatch({
                type: "GET_ALL_CHARACTERS_FAIL",
                error: error,
            });
        }
    };

    return <RickAndMortyContext.Provider value={{
        locations: state.locations,
        characters: state.characters,
        loading: state.loading,
        getLocations,
        getCharacters
    }}>
        {children}
    </RickAndMortyContext.Provider>
}

export default RickAndMortyContext