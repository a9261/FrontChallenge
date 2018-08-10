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
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.toggleTime  = this.toggleTime.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.toggleDate = this.toggleDate.bind(this)
  }
  saveTask() {
    const {layoutAction, taskAction} = this.props;
    layoutAction.disableAllLayout();
    let fileName = ''
    fileName = this.refs.file.files[0]
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
      IsDone: false
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
      IsDone: false
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
  handleTimeChange(dt) {
    this.setState({time: dt})
    this.toggleTime()
  }
  toggleTime (e) {
    e && e.preventDefault()
    this.setState({timeIsOpen: !this.state.timeIsOpen})
  }
  handleDateChange (dt) {
    this.setState({date: dt})
    this.toggleDate()
  }
  
  toggleDate (e) {
    e && e.preventDefault()
    this.setState({dateIsOpen: !this.state.dateIsOpen})
  }
  render() {
    let {taskItemData} = this.props;
    return (
      <div className={`${styles['main-content']}`}>
        {/* header */}
        <div className={`${styles.header}`}>
          <div
            style={{
            width: '100%',
            display: 'inline-block',
            paddingLeft:'20px'
          }}>
            <div className={`${styles['cus-chkbox']}`}>
              <input id='squaredFour' type="checkbox" ref="chkDone"/>
              <label htmlFor="squaredFour"></label>
            </div>
            <input
              placeholder={'Type Something Here...'}
              className={`${styles.fontStyle} ${styles['nice-textbox']}`}
              type="text"
              ref="title"
              defaultValue={taskItemData.Title}/>
            <i className="fas fa-pen"></i>
            <i className="far fa-star"></i>
          </div>
        </div>
        <div className={`${styles.hr}`}></div>
        {/* content */}
        <div className={`${styles.dateline}`}>
          {< i className = "far fa-calendar-alt" > </i>}
          <span>Deadline</span>
          <br/>
          <div style={{
            display: 'inline-block',
            paddingLeft:'20px',
            marginTop:'4px'
          }}>
            <input type="text" onClick={this.toggleDate} value={this.state.date.format("YYYY-MM-DD")}/>
            <input type="text" onClick={this.toggleTime} value={this.state.time.format("HH:mm:ss")}/>
            {
                this.state.dateIsOpen && (
                  <DatePicker  
                  selected={this.state.date}
                  onChange={this
                  .handleDateChange
                  }
                  withPortal
                  inline
                  dateFormat="YYYY/MM/DD"/>
                )
            }
            {
                this.state.timeIsOpen && (
                  <DatePicker  
                  selected={this.state.time}
                  onChange={this
                  .handleTimeChange
                  }
                  showTimeSelect
                  showTimeSelectOnly
                  withPortal
                  inline
                  timeIntervals={15}
                  dateFormat="LT"
                  timeCaption="Turno"/>
                )
            }
          </div>
        </div>

        <div className={`${styles.fileSection}`}>
          <div>{< i className = "far fa-file" > </i>}
            <span>File</span>
          </div>
          <div>
            <input id="file" type="file"  ref="file"/>
            <label htmlFor="file"></label>
          </div>
        </div>

        <div className={`${styles.commentSection}`}>
          <div>
          {< i className = "fab fa-rocketchat" > </i>}
            <span>Comment</span>
          </div> 
          <input
            placeholder={'Type your memo here...'}
            className={`${styles.content}`}
            type="text"
            ref="comment"
            defaultValue={taskItemData.Comment}/>  
        </div>
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
