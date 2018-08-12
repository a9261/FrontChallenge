import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Content from './Content';
import { createConnectComponent } from './ConnectCreator';
import allReducer from './Reducers';

const mapStateToProps = state => ({
  filteredItemData: state.filteredProcess,
});
// 最外層不應該訂閱任何Props 否則會整個重整
// const ContentContainer = createConnectComponent(Content, mapStateToProps);
const ContentContainer = createConnectComponent(Content, null);
const store = createStore(allReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
    <ContentContainer />
  </Provider>, document.getElementById('example'),
);
