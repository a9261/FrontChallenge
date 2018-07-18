import * as types from '../Constants/ActionTypes'

let initState = [];
export default function taskProcess(state = initState, action) {
    switch (action.type) {
        case types.SET_FILTER:
            let filteredTasks = [];
            switch (action.data.filter) {
                case types.SHOW_ALL:
                    filteredTasks = state.map(item => {
                        item.IsView = true;
                        return item;
                    });
                    return filteredTasks;
                case types.SHOW_COMPLETED:
                    filteredTasks = state.map(item => {
                        if (item.IsDone) 
                            item.IsView = true;
                        return item;
                    });
                    return filteredTasks;
                case types.SHOW_PROGRESS:
                    filteredTasks = state.map(item => {
                        if (!item.IsDone) 
                            item.IsView = true;
                        return item;
                    });
                    return filteredTasks;
                default:
                    return state;
            }
            return
        case types.ADD_TASK:
            return [
                ...state,
                action.data
            ]
        case types.EDIT_TASK:
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
