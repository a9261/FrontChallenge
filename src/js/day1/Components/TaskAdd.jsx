import React, { Component } from 'react'
import styles from './TaskAdd.scss'
export default class TaskAdd extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <div className={`${styles['task-add']}`} onClick={this.props.abc}>
            <span>+</span>
            <span>Add Task</span>
        </div>
      </div>
    )
  }
}
