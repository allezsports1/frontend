import { takeEvery, put } from 'redux-saga/effects';
import { GET_BLOG, SET_BLOG_LIST, ABOUT_US_CONTENT, SET_ABOUT_US_CONTENT, USER_LOGIN_SUCCESS, USER_LOGIN, FORGET_PASSWORD_SUCCESS } from './constants';
import { AboutPageResponse, BlogContent } from './mock/contactData'; 

function* getBlogsList() {
    console.log("blog saga called");
    try {
    // loading started
    // const res = yield fetch(ENDPOINTS.BLOGS);
    // const data = yield res.json();
    const data = BlogContent
    if(data){
        yield put({type: SET_BLOG_LIST, data})
    }
    } catch (err) {
        console.log("something went wrong",err);
    } finally {
        // loading completed
    }
}

function* userLogin() {
    try {
    // loading started
    // const res = yield fetch(ENDPOINTS.BLOGS);
    // const data = yield res.json();
    const data = {
        status:true,
        data: {
            message: 'user login'
        }
    }
    if(data){
        yield put({type: USER_LOGIN_SUCCESS, data})
    }
    } catch (err) {
        console.log("something went wrong",err);
    } finally {
        // loading completed
    }
}

function* forgetPassword() {
    try {
    // loading started
    // const res = yield fetch(ENDPOINTS.BLOGS);
    // const data = yield res.json();
    const data = {
        status:true,
        data: {
            message: 'for get password'
        }
    }
    if(data){
        yield put({type: FORGET_PASSWORD_SUCCESS, data})
    }
    } catch (err) {
        console.log("something went wrong",err);
    } finally {
        // loading completed
    }
}

function* getAboutUsContent() {
    console.log("About saga called");
    try {
    // loading started
    const data = yield AboutPageResponse;
    console.log("About data",data);
    if(data){
        yield put({type: SET_ABOUT_US_CONTENT, data})
    }
    } catch (err) {
        console.log("something went wrong",err);
    } finally {
        // loading 
    }
}

function* watchClientSaga() {
    yield takeEvery(GET_BLOG, getBlogsList)
    yield takeEvery(ABOUT_US_CONTENT, getAboutUsContent)
    yield takeEvery(USER_LOGIN, userLogin)
    yield takeEvery(USER_LOGIN, forgetPassword)
}

export default watchClientSaga;