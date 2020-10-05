import {LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE} from '../actions'


const initialState = {
    user: {
        // firstname: "",
        // lastname: "",
        // email: "",
        username: "",
        password:""
      },
    isRegistering: false,
    isLoggingIn: false,
    errors:'',
    id: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER_START:
            return { ...state, isLoggingIn: true, error: "", message: "" };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                id: action.payload
                
            };
        case LOGIN_USER_FAILURE:
            return { ...state, isLoggingIn: false, error: action.payload };
        case REGISTER_USER_START:
            return { ...state, isRegistering: true, error: "", message: "" };
        case REGISTER_USER_SUCCESS:
            return { ...state, isRegistering: false, user: action.payload };
        case REGISTER_USER_FAILURE:
            return { ...state, isRegistering: false, error: action.payload };
        default: 
            return state
    }
}