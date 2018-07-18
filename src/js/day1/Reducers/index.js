//@ts-check
import layoutProcess from './Layout'
import taskProcess from './Task'
import taskItemProcess from './TaskItem';
import filteredProcess from './Filter';
import { combineReducers } from 'redux'

const allReducer = combineReducers({
    layoutProcess,taskProcess,filteredProcess,taskItemProcess,
})

export default allReducer