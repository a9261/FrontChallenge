import * as types from '../Constants/ActionTypes'

export function addTask(task){
    return {
        type:types.ADD_TASK,
        task
    }
}
export function delTask(taskId){
    return {
        type:types.DELETE_TASK,
        taskId
    }
}
export function editTask(task){
    return {
        type:types.EDIT_TASK,
        task
    }
}
