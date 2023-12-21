import { SET_BLOG_LIST, SET_ABOUT_US_CONTENT, USER_LOGIN_SUCCESS, FORGET_PASSWORD_SUCCESS } from "./constants"

export const initialState = {
   blogResponse : [],
   contactUsResponse : [],
   userLoginResponse: [],
   forgetPasswordResponse: [],
}

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BLOG_LIST:
            return {
                ...state,
                blogResponse: action.data,
            };
        case SET_ABOUT_US_CONTENT : 
            return {
                ...state,
                contactUsResponse: action.data,
            };
        case USER_LOGIN_SUCCESS : 
            return {
                ...state,
                userLoginResponse: action.data,
            };

        case FORGET_PASSWORD_SUCCESS : 
            return {
                ...state,
                forgetPasswordResponse: action.data,
            };

        default:
            return state
    }
}