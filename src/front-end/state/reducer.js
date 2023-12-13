import { SET_BLOG_LIST, SET_ABOUT_US_CONTENT } from "./constants"

export const initialState = {
   blogResponse : [],
   contactUsResponse : []
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
        default:
            return state
    }
}