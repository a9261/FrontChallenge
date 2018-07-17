import React, {Component} from 'react'
import styles from './TaskEdit.scss'


export default class TaskEdit extends Component {
  constructor(props) {
    super(props)
    console.log('TaskEdit');
    console.log(props);
  }
  saveTask() {
    const {layoutAction, taskAction} = this.props;
    layoutAction.disableAllLayout();
    taskAction.addTask({
      Title: '假的',
      DeadlineDay: '2018/09/15',
      DeadlineTime: '18:50',
      FileName: '20180514.zip',
      Comment: ' Hello this is demo comment',
      isFavorite: true,
      isDone: true
    });
  }
  saveEditTask() {
    const {layoutAction, taskAction} = this.props;
    layoutAction.disableAllLayout();
    taskAction.editTask({});
  }
  getAddOrEditEle() {
    const {layoutAction, taskAction, layoutData} = this.props;
    if (layoutData.addTaskPanel) {
      return <div
        className={`${styles['button-add']}`}
        onClick={(evt) => {
        this.saveTask()
      }}>+ Add Task</div>
    }
    if (layoutData.editTaskPanel) {
      return <div
        className={`${styles['button-add']}`}
        onClick={(evt) => {
        this.saveEditTask()
      }}>Save Task</div>
    }
  }
  render() {
    let { taskItemData } = this.props;
    return (
      <div className={`${styles['main-content']}`}>
        {/* header */}
        <div className={`${styles.header}`}>
          <input type="checkbox" ref="chkDone"/>
          <input placeholder={'Type Something Here...'} className={`${styles.fontStyle}`} type="text" ref="title" defaultValue={taskItemData.Title}/>
          <i className="far fa-star"></i>
          <i className="fas fa-pen"></i>
        </div>
        {/* content */}
        <div>{< i className = "far fa-calendar-alt" > </i>}<span>Deadline</span></div>
        <div>
          <DatePicker />
          <DatePicker/>
        </div>
        <div>{< i className = "far fa-file" > </i>} <span>File</span></div>
        <div>+</div>
        <div>{< i className = "fab fa-rocketchat" > </i>} <span>Comment</span></div>
        <input placeholder={'Type your memo here...'} className={`${styles.content}`} type="text" ref="comment" defaultValue={taskItemData.Comment}/>
        {/* <div className={`${styles.content}`}>
          this is content
        </div> */}
        {/* buttons */}
        <div className={`${styles['button-section']}`}>
          <div
            className={`${styles['button-cancel']}`}
            onClick={(evt) => {
            this.props.layoutAction.disableAllLayout();
          }}>X Cancel</div>
          {this.getAddOrEditEle()}
        </div>
      </div>
    )
  }
}
