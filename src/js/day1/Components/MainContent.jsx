import React, { Component } from 'react';
import styles from './MainContent.scss';
import TaskList from './TaskList';
import TaskEdit from './TaskEdit';
import TaskAdd from './TaskAdd';
import { createDefaultConnectComponent, createConnectComponent } from '../ConnectCreator';

export default class MainContent extends Component {
  render() {
    const isEditMode = this.props.layoutData.addTaskPanel || this.props.layoutData.editTaskPanel;
    const TaskListContainer = createDefaultConnectComponent(TaskList);
    return (
      <div>
        {!isEditMode && <TaskAdd {...this.props} />}
        {isEditMode && <TaskEdit {...this.props} />}
        <TaskListContainer {...this.props} />
      </div>
    );
  }
}
