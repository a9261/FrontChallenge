import React, {Component} from 'react'
import styles from './Task.scss'
export default class Task extends Component {
  constructor(props) {
    super(props)
  
    this.taskItem = props.taskItem;
    this.taskAction = props.taskAction;
  }
  ediitTaskItem(){
    this.taskAction.setEditTaskItem(this.taskItem);
  }
  getDoneTaskEle() {
    return (
      <div className={`${styles['done-task']}`}>
        <input type="checkbox"/>
        <span>Type Something here...</span>
        <div className={`${styles['task-right-icons']}`}>
          {this.taskItem.isFavorite
            ? <i className="fa fa-star"></i>
            : <i className="far fa-star"></i>}
          {< i className = "far fa-edit" onClick={(evt)=>{this.ediitTaskItem()}} > </i>}
        </div>
      </div>
    );
  }
  getUndoneTaskEle() {
    return (
      <div className={`${styles['undone-task']}`}>
        <div>
          <input type="checkbox"/>
          <span>Type Something Here (Task item)</span>
        </div>
        <div className={`${styles['task-right-icons']}`}>
          {this.taskItem.isFavorite
            ? <i className="fa fa-star"></i>
            : <i className="far fa-star"></i>}
          {< i className = "far fa-edit" onClick={(evt)=>{this.ediitTaskItem()}} > </i>}
        </div>
        {/* task status */}
        <div className={`${styles['width-100']}`}>
          {< i className = "far fa-calendar-alt" > </i>}
          {< i className = "far fa-file" > </i>}
          {< i className = "fab fa-rocketchat" > </i>}
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className={`${styles.task}`}>
        {/* Task has two main status , done and undone */}
        {this.props.taskItem.isDone
          ? this.getDoneTaskEle()
          : this.getUndoneTaskEle()}
      </div>
    )
  }
}
