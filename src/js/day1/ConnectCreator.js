//@ts-check
import {createStore, bindActionCreators, applyMiddleware} from "redux";
import {connect, Provider} from 'react-redux';
import allReducer from './Reducers';
import * as taskAction from './ActionCreators/Task'
import * as layoutAction from './ActionCreators/Layout'


//connnect mapStateToProps 要使用那些State mapDispatchToProps 要使用那些Action Creator
const mapStateToProps = (state) => {
    return {
        layoutData: state.layoutProcess, 
        taskData: state.taskProcess,
        taskItemData : state.taskItemProcess,
        filteredItemData : state.filteredProcess,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        layoutAction: bindActionCreators(layoutAction, dispatch),
        taskAction: bindActionCreators(taskAction, dispatch)
    };
};
export function createDefaultConnectComponent(component){
    return  connect(mapStateToProps, mapDispatchToProps)(component);
}

export function createConnectComponent(component,stateMap=mapStateToProps,dispatchMap=mapDispatchToProps){
    return  connect(stateMap, dispatchMap)(component);
}