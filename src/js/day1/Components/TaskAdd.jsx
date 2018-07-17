import React, { Component } from 'react'
import styles from './TaskAdd.scss'
export default class TaskAdd extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {layoutAction} = this.props;
    return (
      <div>
        <div className={`${styles['task-add']}`} onClick={layoutAction.showAddTaskLayout}>
            <span>+</span>
            <span>Add Task</span>
        </div>
      </div>
    )
  }
}
