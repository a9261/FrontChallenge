import React, {Component} from 'react'
import styles from './MainContent.scss'
import TaskList from './TaskList';
import TaskEdit from './TaskEdit';
import TaskAdd from './TaskAdd';

export default class MainContent extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    let isEditMode = this.props.layoutData.addTaskPanel || this.props.layoutData.editTaskPanel;
    return (
      <div>
         
        {!isEditMode && <TaskAdd {...this.props}/>}
        {isEditMode && <TaskEdit {...this.props}/>}
        <TaskList {...this.props} />
      </div>
    )
  }
}