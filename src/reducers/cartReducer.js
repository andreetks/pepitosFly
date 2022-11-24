const initialState = {
    modalOpen: false,
}

export const cartReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case 'openCart':
            return {
                ...state,
                modalOpen: true
            }

        case 'closeCart':
            return {
                ...state,
                modalOpen: false
            }
    
        default:
            return state;
    }


}