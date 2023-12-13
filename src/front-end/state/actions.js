import { GET_BLOG, ABOUT_US_CONTENT } from "./constants"

export const getBlogList = () => {
    console.log("blog action called");
    return {
        type: GET_BLOG,
    }
}

export const getAboutUsContent = () => {
    console.log("about action called");
    return {
        type: ABOUT_US_CONTENT,
    }
}