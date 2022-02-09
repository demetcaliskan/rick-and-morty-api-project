const rickAndMortyReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LOCATIONS':
            return {
                ...state,
                locations: action.payload,
                loading: false
            }
        case 'GET_LOCATION':
            return {
                ...state,
                location: action.payload,
                loading: false
            }
        case 'GET_CHARACTERS':
            return {
                ...state,
                characters: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default rickAndMortyReducer