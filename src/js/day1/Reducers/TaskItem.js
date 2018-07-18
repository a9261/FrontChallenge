import * as types from '../Constants/ActionTypes'

let def = {
    id: -1,
    Title: '',
    DeadlineDay: '',
    DeadlineTime: '',
    FileName: '',
    Comment: '',
    IsFavorite: false,
    IsDone: false
}
export default function taskItemProcess(state = def, action) {
    switch (action.type) {
        case types.GET_TASK_ITEM:
            return action.data
        default:
            return state;
    }
}