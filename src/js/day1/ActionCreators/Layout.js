import * as types from '../Constants/ActionTypes'

export  function showAddTask(){
    console.log('click showAddTask');
    return {
        type:types.SHOW_ADD_TASK
    }
}
export  function showEditTask(){
    return {
        type:types.SHOW_EDIT_TASK
    }
}