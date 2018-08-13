import { combineReducers } from 'redux';

const initItemList = [];
export function itemList(state = initItemList, action) {
  const data = [].concat(action.data);
  switch (action.type) {
    case 'GET_CONTENT':
      return data;
    default:
      return state;
  }
}
const initItem = {};
export function item(state = initItem, action) {
  const data = Object.assign({}, action.data);
  switch (action.type) {
    case 'GET_ITEM':
      return data;
    default:
      return state;
  }
}
const allReducer = combineReducers({ itemList, item });

export default allReducer;
