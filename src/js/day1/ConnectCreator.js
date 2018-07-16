import {createStore, bindActionCreators, applyMiddleware} from "redux";
import {connect, Provider} from 'react-redux';
import allReducer from './Reducers';
import * as taskAction from './ActionCreators/Task'
import * as layoutAction from './ActionCreators/Layout'
import thunk from 'redux-thunk';


export function createDefaultConnectComponent(component){
   
    //connnect mapStateToProps 要使用那些State mapDispatchToProps 要使用那些Action Creator
    const mapStateToProps = (state) => {
        return {layoutData: state.layoutProcess, taskData: state.taskProcess}
    };
    const mapDispatchToProps = (dispatch) => {
        return {
            layoutAction: bindActionCreators(layoutAction, dispatch),
            taskAction: bindActionCreators(taskAction, dispatch)
        };
    };
    return  connect(mapStateToProps, mapDispatchToProps)(component);
}

export function createConnectComponent(stateMap,dispatchMap,component){
    return  connect(stateMap, dispatchMap)(component);
}