import * as types from '../Constants/ActionTypes'

let layoutDefault = {
    'addTaskPanel': false,
    'editTaskPanel': false
}
export default function layoutProcess(state = layoutDefault, action) {
    switch (action.type) {
        case types.SHOW_ADD_TASK:
            return Object.assign({}, state,{'addTaskPanel': !state.addTaskPanel });
        case types.SHOW_EDIT_TASK:
            return Object.assign({}, state,{'editTaskPanel': !state.editTaskPanel})
        default:
            return state;
    }
}