import * as types from '../Constants/ActionTypes'

let initState = [];
export default function taskProcess(state = initState, action) {
    switch (action.type) {
        case types.ADD_TASK:
            return [
                ...state,
                action.data
            ]
        case types.EDIT_TASK:
        console.log(action.data);
            let newTasks = state.map((item, i) => {
                if (i == action.data.id) {
                    return action.data;
                } else {
                    return item;
                }
            });
            let favTasks = newTasks.filter((item) => {
                return item.IsFavorite == true
            });
            let noneFavTasks = newTasks.filter((item) => {
                return item.IsFavorite == false
            });
            newTasks = favTasks.concat(noneFavTasks);
            return newTasks;
        case types.DELETE_TASK:

            break;
        default:
            return state;
    }
}
