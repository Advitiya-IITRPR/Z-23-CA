const initialState = {
    result: {
        email: "",
        token: ""
    }
}
export default function getuserReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_USER_ACTION':
            if (action.payload == null) {
                return state
            }
            return {
                result: action.payload
            }
        default:
            return state
    }
}