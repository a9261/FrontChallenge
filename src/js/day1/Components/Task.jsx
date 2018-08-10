import React, { Component } from 'react';
import styles from './Task.scss';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.taskItem = props.taskItem;
    this.taskAction = props.taskAction;
    this.onDrag = this.onDrag.bind(this);
    this.state = {
      isChecked: false,
    };
  }

  editTask() {
    const editItem = Object.assign({}, this.taskItem, { id: this.props.id });
    this.taskAction.setEditTaskItem(editItem);
  }

  setTaskFav(isFav) {
    const editItem = Object.assign({}, this.taskItem, { id: this.props.id, IsFavorite: isFav });
    this.taskAction.setTaskItemStatus(editItem);
  }

  setTaskDone(isDone) {
    const editItem = Object.assign({}, this.taskItem, { id: this.props.id, IsDone: !this.taskItem.IsDone });
    this.taskAction.setTaskItemStatus(editItem);
  }

  onDrag() {
    console.log('this task is dragging');
    console.log(this.taskItem);
  }

  _getCommonEle(taskItem) {
    return (
      <div className={`${styles['common-section']}`}>
        <div
          className={`${styles['cus-chkbox']}`}
          onClick={(evt) => { this.setTaskDone(this.refs.chkDone.checked); }}
        >
          <input id="squaredFour" type="checkbox" ref="chkDone" checked={this.taskItem.IsDone} />
          <label htmlFor="squaredFour" />
        </div>
        <span>
          {this.taskItem.Title}
        </span>
        <div className={`${styles['task-right-icons']}`}>
          {this.taskItem.IsFavorite
            ? <i className="fa fa-star" onClick={(evt) => { this.setTaskFav(false); }} />
            : <i className="far fa-star" onClick={(evt) => { this.setTaskFav(true); }} />}
          {<i className="far fa-edit" onClick={(evt) => { this.editTask(); }} />}
        </div>
      </div>
    );
  }

  _getDoneTaskEle() {
    return (
      <div className={`${styles['done-task']}`}>
        {this._getCommonEle(this.taskItem)}
      </div>
    );
  }

  _getUndoneTaskEle() {
    return (
      <div className={`${styles['undone-task']}`}>
        {this._getCommonEle(this.taskItem)}
        {/* task status */}
        <div className={`${styles['width-100']} ${styles['status-section']}`}>
          {
            this.taskItem.DeadlineDay
            && (
            <React.Fragment>
              <i className="fa-sm far fa-calendar-alt" />
              <span>
                {this.taskItem.DeadlineDay}
              </span>
            </React.Fragment>
            )
          }
          {this.taskItem.FileName && <i className="fa-sm far fa-file" />}
          {this.taskItem.Comment.length > 0 && <i className="fa-sm fab fa-rocketchat" />}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={`${styles.task}`} onDrag={this.onDrag} draggable="true">
        {/* Task has two main status , done and undone */}
        {this.props.taskItem.IsDone
          ? this._getDoneTaskEle()
          : this._getUndoneTaskEle()}
      </div>
    );
  }
}
