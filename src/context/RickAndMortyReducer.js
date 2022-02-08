const rickAndMortyReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LOCATIONS':
            console.log('Get locations is updated.')
            return {
                ...state,
                locations: action.payload,
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