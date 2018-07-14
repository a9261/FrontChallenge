import * as React from 'react'
import Task from './Task'
import styles from './TaskList.scss'
export default class TaskList extends React.Component {
  render() {
    return (
      <div className={`${styles['task-list']}`}>
        <Task/>
      </div>
    )
  }
}
