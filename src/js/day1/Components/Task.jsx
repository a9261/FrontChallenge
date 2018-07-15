import React, {Component} from 'react'
import styles from './Task.scss'
export default class Task extends Component {
  constructor(props) {
    super(props)
  }
  getDoneTaskEle() {
    return (
      <div className={`${styles['done-task']}`}>
        <input type="checkbox"/>
        <span>
          Type Something here...</span>
        <i className="far fa-star"></i>
        <i className="far fa-edit"></i>
      </div>
    );
  }
  getUndoneTaskEle() {
    return (
      <div className={`${styles['undone-task']}`}>
        <div>
          <input type="checkbox"/>
          Type Something Here (Task item)
          <i className="far fa-star"></i>
          <i className="far fa-edit"></i>
        </div>
        {/* task status */}
        <div>
          <i className="far fa-calendar-alt"></i>
          <i className="far fa-file"></i>
          <i className="fab fa-rocketchat"></i>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className={`${styles.task}`}>
        {/* Task has two main status , done and undone */}
        {this.props.isDone=='true' ? this.getDoneTaskEle() : this.getUndoneTaskEle() }
      </div>
    )
  }
}
