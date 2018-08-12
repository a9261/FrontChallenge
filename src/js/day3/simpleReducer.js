import { combineReducers } from 'redux';

const initState = {
  name: 'Empty Name',
};
export default function NameData(state = initState, action) {
  switch (action.type) {
    case 'SHOW_NAME':
      console.log('IN');
      return Object.assign({}, state, { name: `Name is ${action.name}` });
    default:
      return state;
  }
}

// const allReducer = combineReducers({
//   NameData,
// });

// export default allReducer;
