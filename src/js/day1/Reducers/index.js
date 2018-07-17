//@ts-check
import layoutProcess from './Layout'
import taskProcess from './Task'
import { combineReducers } from 'redux'
import taskItemProcess from './TaskItem';

const allReducer = combineReducers({
    layoutProcess,taskProcess,taskItemProcess
})

export default allReducer