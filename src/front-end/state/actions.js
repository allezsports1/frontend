import { GET_BLOG, ABOUT_US_CONTENT, USER_LOGIN, FORGET_PASSWORD } from "./constants"

export const getBlogList = () => {
    return {
        type: GET_BLOG,
    }
}

export const getAboutUsContent = () => {
    return {
        type: ABOUT_US_CONTENT,
    }
}

export const userLogin = (payload) =>{
    return{
        type: USER_LOGIN,
        payload: payload
    }
}

export const forget_Password = (payload) =>{
    return{
        type: FORGET_PASSWORD,
        payload: payload
    }
}