// @ts-check
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
// import allReducer from './Reducers';
// import * as taskAction from './ActionCreators/Task';
// import * as layoutAction from './ActionCreators/Layout';

import * as commonAction from './CommonAction';

// connnect mapStateToProps 要使用那些State mapDispatchToProps 要使用那些Action Creator
const mapStateToProps = state => ({
  commonData: state.itemList,
  item: state.item,
});
const mapDispatchToProps = dispatch => ({
  commonAction: bindActionCreators(commonAction, dispatch),
});
export function createDefaultConnectComponent(component) {
  return connect(mapStateToProps, mapDispatchToProps)(component);
}

export function createConnectComponent(component,
  stateMap = mapStateToProps, dispatchMap = mapDispatchToProps) {
  return connect(stateMap, dispatchMap)(component);
}
