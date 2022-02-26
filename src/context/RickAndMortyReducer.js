const rickAndMortyReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LOCATIONS_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'GET_LOCATIONS_SUCCESS':
            return {
                ...state,
                locations: action.payload,
                loading: false
            }
        case 'GET_LOCATIONS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "GET_ALL_CHARACTERS_REQUEST":
            return {
                ...state,
                loading: true,
            }
        case "GET_ALL_CHARACTERS_SUCCESS":
            return {
                ...state,
                loading: false,
                characters: action.payload,
            }
        case "GET_ALL_CHARACTERS_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default rickAndMortyReducer