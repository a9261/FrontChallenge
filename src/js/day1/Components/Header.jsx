import React, {Component} from 'react'
import * as types from '../Constants/ActionTypes'
import styles from './Header.scss'
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterType : types.SHOW_ALL
        }
        this.props.taskAction.filterTaskList(this.state.filterType);
    }
    showAllTask(){
        this.setState({
            filterType:types.SHOW_ALL
        });
        this.props.taskAction.filterTaskList(types.SHOW_ALL);
    }
    showProgressTask(){
        this.setState({
            filterType:types.SHOW_PROGRESS
        });
        this.props.taskAction.filterTaskList(types.SHOW_PROGRESS);
    }
    showCompletedTask(){
        this.setState({
            filterType:types.SHOW_COMPLETED
        });
        this.props.taskAction.filterTaskList(types.SHOW_COMPLETED);
    }
    render() {
        return (
            <div className={`${styles.header}`}>
                <ul className={styles['menu-bar']}>
                    <li>
                        <a href="#" onClick={(evt)=>{this.showAllTask()}}>My Taks</a>
                    </li>
                    <li>
                        <a href="#" onClick={(evt)=>{this.showProgressTask()}}>In Progress</a>
                    </li>
                    <li>
                        <a href="#" onClick={(evt)=>{this.showCompletedTask()}}>Completed</a>
                    </li>
                </ul>
            </div>
        )
    }
}
