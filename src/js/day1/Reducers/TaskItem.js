import * as types from '../Constants/ActionTypes'

let def = {
    // Title: 'Type Something Here...',
    // DeadlineDay: '',
    // DeadlineTime: '',
    // FileName: '',
    // Comment: 'Hello this is demo comment',
    // isFavorite: true,
    // isDone: true
}
export default function taskItemProcess(state = def, action) {
    switch (action.type) {
        case types.GET_TASK_ITEM:
            return action.data
        default:
            return state;
    }
}