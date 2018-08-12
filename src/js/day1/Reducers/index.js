// @ts-check
import { combineReducers } from 'redux';
import layoutProcess from './Layout';
import taskProcess from './Task';
import taskItemProcess from './TaskItem';
import filteredProcess from './Filter';


const allReducer = combineReducers({
  layoutProcess, taskProcess, filteredProcess, taskItemProcess,
});
export default allReducer;

