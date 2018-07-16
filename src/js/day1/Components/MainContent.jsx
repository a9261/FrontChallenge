import React, {Component} from 'react'
import styles from './MainContent.scss'
import TaskList from './TaskList';
import TaskEdit from './TaskEdit';
import TaskAdd from './TaskAdd';
export default class MainContent extends Component {

  constructor(props) {
    super(props);
    // let fullstore = createStore(allReducer)
    this.mockTaskData = [
      {
        Title: 'Test Task 01',
        DeadlineDay: '2018/07/15',
        DeadlineTime: '18:50',
        FileName: '20180514.zip',
        Comment: ' Hello this is demo comment',
        isFavorite: true,
        isDone: true
      }, {
        Title: 'Test Task 02',
        DeadlineDay: '2018/04/15',
        DeadlineTime: '18:50',
        FileName: '20180514.zip',
        Comment: ' Hello this is demo comment',
        isFavorite: true,
        isDone: false
      }, {
        Title: 'Test Task 03',
        DeadlineDay: '2018/06/15',
        DeadlineTime: '18:50',
        FileName: '20180514.zip',
        Comment: ' Hello this is demo comment',
        isFavorite: true,
        isDone: true
      }
    ];
  }
  render() {
    // let isShowEditPanel = this.props.layoutData.addTask && this.props.layoutData.editTask;
    return (
      <div>
        {/* {this.props.layoutData.addTask && <TaskAdd {...this.props}/> } */}
        {/* {this.props.layoutData.editTask && <TaskEdit/>} */}
        {/* tasklist */}
        <TaskList tasks={this.mockTaskData}/>
      </div>
    )
  }
}