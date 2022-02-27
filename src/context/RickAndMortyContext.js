import { createContext, useReducer } from 'react'
import rickAndMortyReducer from './RickAndMortyReducer'
import instance from './network'

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
            const res = await instance.get(`/location`)
            dispatch({
                type: 'GET_LOCATIONS_SUCCESS',
                payload: res.data.results
            })

        } catch (error) {
            dispatch({
                type: "GET_LOCATIONS_FAIL",
                error: error,
            })
        }
    }

    const getCharacters = async (location_id) => {
        try {
            dispatch({
                type: "GET_CHARACTERS_REQUEST",
            });
            const resp = await instance.get(`/location/${location_id}`)
            const resArr = resp.data.residents
            let ids = ""
            resArr.map((resident) => {
                const residentArr = resident.split("/")
                return (ids += residentArr[residentArr.length - 1] + ",")
            })

            if (ids !== "") {
                const { data } = await instance.get(`/character/${ids}`)
                dispatch({
                    type: "GET_CHARACTERS_SUCCESS",
                    payload: data,
                })
            } else {
                dispatch({
                    type: "GET_CHARACTERS_SUCCESS",
                    payload: [],
                })
            }
        } catch (error) {
            dispatch({
                type: "GET_CHARACTERS_FAIL",
                error: error,
            })
        }
    }

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