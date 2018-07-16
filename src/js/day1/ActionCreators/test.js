import * as types from '../Constants/ActionTypes'
export function addTask(task){
     return (dispatch) => {
        // dispatch(addTaskSuccess(task));
        dispatch(addTaskRequest());
        setTimeout(() => {
            dispatch(addTaskSuccess(task));
        }, 1000);
    };
}
export function addTaskRequest() {
    return {
        type: types.ADD_TASK_REQUEST
    };
}
export function addTaskSuccess(task) {
    return {
        type: types.ADD_TASK_SUCCESS,
        task
    };
}