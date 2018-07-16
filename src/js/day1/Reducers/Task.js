import * as types from '../Constants/ActionTypes'

let initState = [
    {
      Title: 'Test Task 01',
      DeadlineDay: '2018/07/15',
      DeadlineTime: '18:50',
      FileName: '20180514.zip',
      Comment: ' Hello this is demo comment',
      isFavorite: true,
      isDone: true
    }, {
      Title: 'Test Task 02',
      DeadlineDay: '2018/04/15',
      DeadlineTime: '18:50',
      FileName: '20180514.zip',
      Comment: ' Hello this is demo comment',
      isFavorite: true,
      isDone: false
    }, {
      Title: 'Test Task 03',
      DeadlineDay: '2018/06/15',
      DeadlineTime: '18:50',
      FileName: '20180514.zip',
      Comment: ' Hello this is demo comment',
      isFavorite: true,
      isDone: true
    }
  ];
export default function taskProcess(state = initState, action) {
    switch (action.type) {
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
