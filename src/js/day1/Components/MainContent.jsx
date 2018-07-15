import React, {Component} from 'react'
import styles from './MainContent.scss'
import TaskList from './TaskList';
import TaskEdit from './TaskEdit';
import TaskAdd from './TaskAdd';
export default class MainContent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isEdit:false
    }
    this.mockTaskData = [
      {
        Title: 'Test Task 01',
        DeadlineDay:'2018/07/15',
        DeadlineTime:'18:50',
        FileName:'20180514.zip',
        Comment:' Hello this is demo comment',
        isFavorite : true,
        isDone: true
      },
      {
        Title: 'Test Task 02',
        DeadlineDay:'2018/04/15',
        DeadlineTime:'18:50',
        FileName:'20180514.zip',
        Comment:' Hello this is demo comment',
        isFavorite : true,
        isDone: false
      },
      {
        Title: 'Test Task 03',
        DeadlineDay:'2018/06/15',
        DeadlineTime:'18:50',
        FileName:'20180514.zip',
        Comment:' Hello this is demo comment',
        isFavorite : true,
        isDone: true
      }
    ];
  }
  changeToEdit(){
    console.log('You are in Edit')
    this.setState({isEdit:true});
  }
  render() {
    return (
      <div>
        {!this.state.isEdit && <TaskAdd abc={this.changeToEdit.bind(this)} /> }
        {this.state.isEdit && <TaskEdit/>}
        {/* tasklist */}
        <TaskList tasks={this.mockTaskData}/>
      </div>
    )
  }
}