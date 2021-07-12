import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import firebaseReducer from './firebaseReducer';
import assetReducer from './assetReducer';
import pageReducer from './pageReducer';
import accessReducer from './accessReducer';
import galleryReducer from './galleryReducer';
import faqReducer from './faqReducer';
import mgmtProfileReducer from './mgmtProfileReducer';

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    fire: firebaseReducer,
    asset: assetReducer,
    page: pageReducer,
    access: accessReducer,
    gallery: galleryReducer,
    faq: faqReducer,
    mgmtProfile: mgmtProfileReducer
});