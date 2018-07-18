import React, {Component} from 'react'
import styles from './TaskEdit.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from 'moment';

export default class TaskEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment(),
      time: moment()
    }
  }
  saveTask() {
    const {layoutAction, taskAction} = this.props;
    layoutAction.disableAllLayout();
    let fileName = this.refs.file.files[0]
      ? this.refs.file.files[0].name
      : '';
    let task = {
      Title: this.refs.title.value,
      DeadlineDay: this
        .state
        .date
        .format('YYYY/MM/DD'),
      DeadlineTime: this
        .state
        .time
        .format('hh:mm'),
      FileName: fileName,
      Comment: this.refs.comment.value,
      IsFavorite: false,
      IsDone: false,
    }
    taskAction.addTask(task);
  }
  saveEditTask() {
    const {layoutAction, taskAction} = this.props;
    layoutAction.disableAllLayout();
    let fileName = this.refs.file.files[0]
    ? this.refs.file.files[0].name
    : '';
    let changedTask = {
      id: this.props.taskItemData.id,
      Title: this.refs.title.value,
      DeadlineDay: this
        .state
        .date
        .format('YYYY/MM/DD'),
      DeadlineTime: this
        .state
        .time
        .format('hh:mm'),
      FileName: fileName,
      Comment: this.refs.comment.value,
      IsFavorite: false,
      IsDone: false,
    }
    taskAction.editTask(changedTask);
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
  handleDateChange(dt) {
    this.setState({date: dt})
  }
  handleTimeChange(dt) {
    this.setState({time: dt})
  }
  render() {
    let {taskItemData} = this.props;
    return (
      <div className={`${styles['main-content']}`}>
        {/* header */}
        <div className={`${styles.header}`}>
          <input type="checkbox" ref="chkDone"/>
          <input
            placeholder={'Type Something Here...'}
            className={`${styles.fontStyle}`}
            type="text"
            ref="title"
            defaultValue={taskItemData.Title}/>
          <i className="far fa-star"></i>
          <i className="fas fa-pen"></i>
        </div>
        {/* content */}
        <div>{< i className = "far fa-calendar-alt" > </i>}
          <span>Deadline</span>
        </div>
        <div>
          <DatePicker
            selected={this.state.date}
            onChange={this
            .handleDateChange
            .bind(this)}
            dateFormat="YYYY/MM/DD"/>
          <DatePicker
            selected={this.state.time}
            onChange={this
            .handleTimeChange
            .bind(this)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="LT"
            timeCaption="Turno"/>
        </div>
        <div>{< i className = "far fa-file" > </i>}
          <span>File</span>
        </div>
        <div>
          <input type="file" ref='file'/>
        </div>
        <div>{< i className = "fab fa-rocketchat" > </i>}
          <span>Comment</span>
        </div>
        <input
          placeholder={'Type your memo here...'}
          className={`${styles.content}`}
          type="text"
          ref="comment"
          defaultValue={taskItemData.Comment}/> {/* <div className={`${styles.content}`}>
          this is content
        </div> */}
        {/* buttons */}
        <div className={`${styles['button-section']}`}>
          <div
            className={`${styles['button-cancel']}`}
            onClick={(evt) => {
            this
              .props
              .layoutAction
              .disableAllLayout();
          }}>X Cancel</div>
          {this.getAddOrEditEle()}
        </div>
      </div>
    )
  }
}
