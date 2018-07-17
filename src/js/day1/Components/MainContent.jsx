import React, {Component} from 'react'
import styles from './MainContent.scss'
import TaskList from './TaskList';
import TaskEdit from './TaskEdit';
import TaskAdd from './TaskAdd';
// import 'flatpickr/dist/flatpickr.css'
 
import Flatpickr from 'react-flatpickr'
export default class MainContent extends Component {

  constructor(props) {
    super(props);
  }
  showLog(){
    console.log('HI');
  }
  render() {
    let isEditMode = this.props.layoutData.addTaskPanel || this.props.layoutData.editTaskPanel;
    return (
      <div>
        <Flatpickr/>
        {!isEditMode && <TaskAdd {...this.props}/>}
        {isEditMode && <TaskEdit {...this.props}/>}
        <TaskList {...this.props} />
      </div>
    )
  }
}