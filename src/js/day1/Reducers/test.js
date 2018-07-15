import * as types from '../Constants/ActionTypes'
export default function test(state = false, action) {
    switch (action.type) {
        case types.ADD_TASK_REQUEST:
            console.log('test');
            return true;
        case types.ADD_TASK_SUCCESS:
        case types.ADD_TASK_FAILURE:
            return false;
        default:
            return state;
    }
}