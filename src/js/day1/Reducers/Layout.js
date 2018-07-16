import * as types from '../Constants/ActionTypes'

let layoutDefault = {
    'addTask': true,
    'editTaks': false
}
export default function layoutProcess(state = layoutDefault, action) {
    switch (action.type) {
        case types.SHOW_ADD_TASK:
            console.log('SHOW_ADD_TASK');
            return Object.assign({}, state,{'addTask': !state.AddTask });
        case types.SHOW_EDIT_TASK:
            return Object.assign({}, state,{'editTask': !state.EditTaks})
        default:
            return state;
    }
}