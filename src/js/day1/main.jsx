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
const ContentContainer = createConnectComponent(Content, mapStateToProps);
const store = createStore(allReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <ContentContainer />
  </Provider>, document.getElementById('example'),
);
