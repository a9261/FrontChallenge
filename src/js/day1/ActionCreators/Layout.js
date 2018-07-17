import * as types from '../Constants/ActionTypes'

export  function showAddTaskLayout(){
    return {
        type:types.SHOW_ADD_TASK_LAYOUT
    }
}
export  function showEditTaskLayout(){
    return {
        type:types.SHOW_EDIT_TASK_LAYOUT
    }
}
export  function disableAllLayout(){
    return {
        type:types.DISALBE_ALL_LAYOUT
    }
}