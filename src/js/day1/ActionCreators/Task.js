//@ts-check
import * as types from '../Constants/ActionTypes'
import {showEditTaskLayout} from './Layout';

function _updateFilteredTaskList(dispatch,getState){
    let items = getState().taskProcess;
    let filterType = getState().filteredProcess.type;
    dispatch({
        type: types.SET_FILTER,
        data: {
            filter: filterType,
            taskItems: items
        }
    })
}
export function filterTaskList(filter) {
    return function (dispatch, getState) {
        // let originData = getState()
        dispatch({
            type: types.SET_FILTER,
            data: {
                filter,
                taskItems: getState().taskProcess
            }
        })
    }
}
export function setTaskItemStatus(taskItem) {
    //There only setting TaskItem is
    return function (dispatch, getState) {
        dispatch({type: types.EDIT_TASK, data: taskItem})
        _updateFilteredTaskList(dispatch,getState);
    }
}
export function setEditTaskItem(taskItem) {
    return function (dispatch, getState) {
        dispatch({type: types.GET_TASK_ITEM, data: taskItem})
        dispatch(showEditTaskLayout())
    }
}

export function addTask(task) {
    return function (dispatch, getState) {
        dispatch({type: types.ADD_TASK, data: task});
        _updateFilteredTaskList(dispatch,getState);
    }
}
export function delTask(taskId) {
    return function(dispatch,getState){
        dispatch({type: types.DELETE_TASK, data: taskId});
        _updateFilteredTaskList(dispatch,getState);
    }
}
export function editTask(task) {
    return function(dispatch,getState){
        dispatch({type: types.EDIT_TASK, data: task});
        _updateFilteredTaskList(dispatch,getState);
    }
}
