import * as types from '../Constants/ActionTypes'

let layoutDefault = {
    'addTaskPanel': false,
    'editTaskPanel': false
}
export default function layoutProcess(state = layoutDefault, action) {
    switch (action.type) {
        case types.SHOW_ADD_TASK_LAYOUT:
            return Object.assign({}, state,{'addTaskPanel': true });
        case types.SHOW_EDIT_TASK_LAYOUT:
            return Object.assign({}, state,{'editTaskPanel': true})
        case types.DISALBE_ALL_LAYOUT:
            return layoutDefault;    
        default:
            return state;
    }
}