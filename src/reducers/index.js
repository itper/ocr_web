import { combineReducers } from 'redux';
import UserReducer from './user';
import CompanyReducer from './company';
import PositionReducer from './position';

const rootReducer = combineReducers({
    user: UserReducer,
    company:CompanyReducer,
    position:PositionReducer
});

export default rootReducer;
