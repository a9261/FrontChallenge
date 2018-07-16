import * as React from "react";
import * as ReactDOM from "react-dom";
import Content from './Content'
import {createStore, bindActionCreators, applyMiddleware} from "redux";
import {connect, Provider} from 'react-redux';
import allReducer from './Reducers';
import * as taskAction from './ActionCreators/Task'
import * as layoutAction from './ActionCreators/Layout'
import thunk from 'redux-thunk';

let store = createStore(allReducer);
//connnect mapStateToProps 要使用那些State mapDispatchToProps 要使用那些Action Creator
const mapStateToProps = (state) => {
    return {layoutData: state.layoutProcess, taskData: state.taskProcess}
};
const mapDispatchToProps = (dispatch) => {
    return {
        layoutAction: bindActionCreators(layoutAction, dispatch),
        taskAction: bindActionCreators(taskAction, dispatch),
    };
};
const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

ReactDOM.render(
    <ContentContainer/>, document.getElementById("example"));