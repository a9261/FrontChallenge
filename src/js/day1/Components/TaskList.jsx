import * as React from 'react'
import Task from './Task'
import styles from './TaskList.scss'
export default class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.unDoneTasks = 0;
    this.tasksEle = this.renderItems(props.filteredItemData.items)
  }
  renderItems(tasks) {
    let result = tasks.map((item, i) => {
      if (!item.isDone) {
        this.unDoneTasks++;
      }
      return <Task key={i} id={i} taskItem={item} taskAction={this.props.taskAction}/>
    });
    return result;
  }
  render() {
    return (
      <div className={`${styles['task-list']}`}>
        {this.tasksEle}
        <span>{this.unDoneTasks}
          tasks left</span>
      </div>
    )
  }
}
