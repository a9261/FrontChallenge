import React, {Component} from 'react'
import * as types from '../Constants/ActionTypes'
import styles from './Header.scss'
export default class Header extends Component {
    constructor(props){
        super(props);
        this._chkFilterType = this._chkFilterType.bind(this);
    }
    showAllTask(){
        this.props.taskAction.filterTaskList(types.SHOW_ALL);
    }
    showProgressTask(){
        this.props.taskAction.filterTaskList(types.SHOW_PROGRESS);
    }
    showCompletedTask(){
        this.props.taskAction.filterTaskList(types.SHOW_COMPLETED);
    }
    _chkFilterType(filterTypeName){
        if(filterTypeName==this.props.filteredItemData.type){
            return styles['active'];
        }
        return  ' ';
    }
    render() {
        return (
            <div className={`${styles.header}`}>
                <ul className={styles['menu-bar']}>
                    <li>
                        <span  className={this._chkFilterType(types.SHOW_ALL)}  onClick={(evt)=>{this.showAllTask()}}>My Taks</span>
                    </li>
                    <li>
                        <span className={this._chkFilterType(types.SHOW_PROGRESS)} onClick={(evt)=>{this.showProgressTask()}}>In Progress</span>
                    </li>
                    <li>
                        <span className={this._chkFilterType(types.SHOW_COMPLETED)} onClick={(evt)=>{this.showCompletedTask()}}>Completed</span>
                    </li>
                </ul>
            </div>
        )
    }
}
