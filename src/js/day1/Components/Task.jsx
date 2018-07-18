import React, {Component} from 'react'
import styles from './Task.scss'
export default class Task extends Component {
  constructor(props) {
    super(props)
    this.taskItem = props.taskItem;
    this.taskAction = props.taskAction;
  }
  editTask(){
    let editItem = Object.assign({},this.taskItem,{id:this.props.id});
    this.taskAction.setEditTaskItem(editItem);
  }
  setTaskFav(isFav){
    let editItem = Object.assign({},this.taskItem,{id:this.props.id,IsFavorite:isFav});
    this.taskAction.setTaskFavItem(editItem);
  }
  setTaskDone(isDone){
    console.log('isDone');
    console.log(isDone);
    let editItem = Object.assign({},this.taskItem,{id:this.props.id,IsDone:isDone});
    this.taskAction.setTaskFavItem(editItem);
  }
  _getCommonEle(taskItem){
    return (
    <div>
      <input type="checkbox" ref="isDone" onClick={(evt)=>{this.setTaskDone(this.refs.isDone.checked)}}/>
      <span>{this.taskItem.Title}</span>
      <div className={`${styles['task-right-icons']}`}>
        {this.taskItem.IsFavorite
          ? <i className="fa fa-star" onClick={(evt)=>{this.setTaskFav(false)}}></i>
          : <i className="far fa-star" onClick={(evt)=>{this.setTaskFav(true)}}></i>}
        {< i className = "far fa-edit" onClick={(evt)=>{this.editTask()}} > </i>}
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
        <div className={`${styles['width-100']}`}>
          {this.taskItem.DeadlineDay && < i className = "far fa-calendar-alt" > </i>}
          {this.taskItem.FileName &&  < i className = "far fa-file" > </i>}
          {this.taskItem.Comment.length >0  && < i className = "fab fa-rocketchat" > </i>}
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className={`${styles.task}`}>
        {/* Task has two main status , done and undone */}
        {this.props.taskItem.IsDone
          ? this._getDoneTaskEle()
          : this._getUndoneTaskEle()}
      </div>
    )
  }
}
