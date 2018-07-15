import { combineReducers } from "redux";
import test from './test';
import test2 from './test2';

const testReducer = combineReducers({
    test,test2
})
export default testReducer;