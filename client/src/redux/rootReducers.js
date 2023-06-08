import { combineReducers } from 'redux';
import getprofileReducer from '../components/auth/reducers/profileReducers';
import getleadersReducer from '../components/auth/reducers/leadersReducer';
import getuserReducer from '../components/auth/reducers/userReducer';




export default combineReducers({
    user: getuserReducer,
    getleaders: getleadersReducer,
    getprofile: getprofileReducer
});