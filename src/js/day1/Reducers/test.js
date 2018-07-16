import * as types from '../Constants/ActionTypes'
export default function test(state = false, action) {
    switch (action.type) {
        case types.ADD_TASK_REQUEST:

            return true;
        case types.ADD_TASK_SUCCESS:
            console.log('test');
            return false;
        case types.ADD_TASK_FAILURE:
            return false;
        default:
            return state;
    }
}