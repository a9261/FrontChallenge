import * as types from '../Constants/ActionTypes'

export default function taskProcess(state = [], action) {
    switch (action.key) {
        case types.ADD_TASK:
            return [...state,action.data]
            break;
        case types.EDIT_TASK:

            break;
        case types.DELETE_TASK:

            break;
        default:
            return state;
    }
}
