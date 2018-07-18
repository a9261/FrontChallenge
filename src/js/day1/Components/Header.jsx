import React, {Component} from 'react'
import * as types from '../Constants/ActionTypes'
import styles from './Header.scss'
export default class Header extends Component {
    constructor(props){
        super(props);
        console.log(props);
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
    render() {
        return (
            <div className={`${styles.header}`}>
                <ul className={styles['menu-bar']}>
                    <li>
                        <a href="#">My Taks</a>
                    </li>
                    <li>
                        <a href="#">In Progress</a>
                    </li>
                    <li>
                        <a href="#">Completed</a>
                    </li>
                </ul>
            </div>
        )
    }
}
