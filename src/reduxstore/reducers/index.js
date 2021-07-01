import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import firebaseReducer from './firebaseReducer';
import assetReducer from './assetReducer';

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    fire: firebaseReducer,
    asset: assetReducer
});