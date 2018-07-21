//@ts-check
import * as types from '../Constants/ActionTypes'
let initState = {
    type:types.SHOW_ALL,
    items:[]
};
export default function filteredProcess(state = initState, action) {
    switch (action.type) {
        case types.SET_FILTER:
            let filteredTasks = state;
            switch (action.data.filter) {
                case types.SHOW_ALL:
                    if (action.data.taskItems) {
                        return { type:types.SHOW_ALL,items:action.data.taskItems}
                    }
                    return state;
                case types.SHOW_COMPLETED:
                    filteredTasks = action
                        .data
                        .taskItems
                        .filter(item => {
                            return item.IsDone;
                        });
                        return { type:types.SHOW_COMPLETED,items:filteredTasks}
                case types.SHOW_PROGRESS:
                    filteredTasks = action
                        .data
                        .taskItems
                        .filter(item => {
                            return !item.IsDone;
                        });
                    return { type:types.SHOW_PROGRESS,items:filteredTasks}
                default:
                    return state;
            }
        default:
            return state;
    }

}