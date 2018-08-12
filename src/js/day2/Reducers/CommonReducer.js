import { combineReducers } from 'redux';

const initState = {
  keyword: '',
};
export function itemList(state = initState, action) {
  switch (action.type) {
    case 'SET_KEYWORD':
      return Object.assign({}, state, { keyword: action.data.keyword });
    default:
      return state;
  }
}

const allReducer = combineReducers({ itemList });

export default allReducer;
