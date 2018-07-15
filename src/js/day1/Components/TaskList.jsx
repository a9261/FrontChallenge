import * as React from 'react'
import Task from './Task'
import styles from './TaskList.scss'
export default class TaskList extends React.Component {
  constructor(props){
    super(props)
    this.TasksEle = this.renderItems(props.tasks) 
  }
  renderItems(tasks){
   return tasks.map((item,i)=>{
      return <Task key={i} isDone={`${item.isDone}`}/>
    });
  }
  render() {
    return (
      <div className={`${styles['task-list']}`}>
        {/* <Task isDone='true'/>
        <Task isDone='false'/> */}
        {this.TasksEle}
        <span>4 tasks left</span>
      </div>
    )
  }
}
