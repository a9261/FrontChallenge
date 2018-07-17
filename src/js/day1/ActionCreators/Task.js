//@ts-check
import * as types from '../Constants/ActionTypes'
import { showEditTaskLayout } from './Layout';

export function setEditTaskItem(taskItem){
    return function (dispatch,getState){
        dispatch({
            type:types.GET_TASK_ITEM,
            data:taskItem
        })
        dispatch(showEditTaskLayout())
    }
    // return {
    //     type:types.GET_TASK_ITEM,
    //     data:taskId
    // }
}

export function addTask(task){
    return {
        type:types.ADD_TASK,
        data:task
    }
}
export function delTask(taskId){
    return {
        type:types.DELETE_TASK,
        data:taskId
    }
}
export function editTask(task){
    return {
        type:types.EDIT_TASK,
        data:task
    }
}
