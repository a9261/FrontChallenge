import * as React from "react";
import * as ReactDOM from "react-dom";
import Content from './Content'
import {createStore} from "redux";
import allReducer from './Reducers'
//Reducer用來處理state用，裡面其實就會用到state 這裡會需要設定一開始state的預設值
// Reducer 處理物件時，不會修改舊有的，而且回傳一個全新的
let initState = [{
    Title: 'Default Task',
    DeadlineDay: '2018/07/15',
    DeadlineTime: '18:50',
    FileName: '20180514.zip',
    Comment: ' Hello this is demo comment',
    isFavorite: true,
    isDone: true
}]
let myReducer = function TaskProcess(state=initState, action) {
    switch (action.type) {
        case 'Add':
            return [...state,action.data]
            break;
        default:
            return state
    }
}
//建立store
let store = createStore(myReducer)
console.log(store.getState()) // 預設只有一個default Object
store.subscribe(() => console.log(store.getState()))
//目前範例裡的reducer只有處理Add動作
//這裡不透過 action createtor 傳送 action plain simple object
//透過 action createtor , 
store.dispatch({
    type: 'Add',
    data: {
        Title: 'Add Task',
        DeadlineDay: '2018/07/15',
        DeadlineTime: '18:50',
        FileName: '20180514.zip',
        Comment: ' Hello this is demo comment',
        isFavorite: true,
        isDone: true
    }
})

//完整使用
//1. 先匯入allReducer 
let fullstore = createStore(allReducer)

ReactDOM.render(
    <Content/>, document.getElementById("example"));