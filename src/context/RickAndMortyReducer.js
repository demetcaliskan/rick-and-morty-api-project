const rickAndMortyReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LOCATIONS':
            return {
                ...state,
                locations: action.payload,
                loading: FALSE
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: TRUE
            }
        default:
            return state
    }
}

export default rickAndMortyReducer