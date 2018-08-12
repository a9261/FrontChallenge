import { combineReducers } from 'redux';

const initState = [];
export function itemList(state = initState, action) {
  const data = [].concat(state).concat(action.data);
  switch (action.type) {
    case 'GET_CONTENT':
      return data;
    default:
      return state;
  }
}

const allReducer = combineReducers({ itemList });

export default allReducer;
