import * as types from '../Constants/ActionTypes'
export default function test2(state=[],action){
    switch (action.type) {
        case types.ADD_TASK_SUCCESS:
        console.log('test2');
        return [
            ...state,
            {
                task: action.task,
                isCompleted: false
            }
        ];
        default:
            return state;
    }
}