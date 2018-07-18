import * as React from "react";
import * as ReactDOM from "react-dom";
import Content from './Content'
import {createDefaultConnectComponent} from "./ConnectCreator";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import allReducer from './Reducers';
import thunk from 'redux-thunk';

let ContentContainer = createDefaultConnectComponent(Content);
let store = createStore(allReducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
    <ContentContainer/>
</Provider>, document.getElementById("example"));