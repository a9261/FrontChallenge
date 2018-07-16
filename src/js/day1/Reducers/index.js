import layoutProcess from './Layout'
import taskProcess from './Task'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
    layoutProcess,taskProcess
})

export default allReducer