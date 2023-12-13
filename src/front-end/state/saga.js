import { takeEvery, put } from 'redux-saga/effects';
import { GET_BLOG, SET_BLOG_LIST, ABOUT_US_CONTENT, SET_ABOUT_US_CONTENT, ENDPOINTS } from './constants';
import { AboutPageResponse } from './mock/contactData'; 

function* getBlogsList() {
    console.log("blog saga called");
    try {
    // loading started
    const res = yield fetch(ENDPOINTS.BLOGS);
    const data = yield res.json();
    console.log("Blog data",data);
    if(data){
        yield put({type: SET_BLOG_LIST, data})
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
        // loading completed
    }
}

function* watchClientSaga() {
    yield takeEvery(GET_BLOG, getBlogsList)
    yield takeEvery(ABOUT_US_CONTENT, getAboutUsContent)
}

export default watchClientSaga;