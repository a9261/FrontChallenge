import React, {Component} from 'react'
import styles from './MainContent.scss'
import TaskList from './TaskList';
export default class MainContent extends Component {
  render() {
    // console.log(styles)
    return (
      <div className={`${styles['main-content']}`}>
        {/* header */}
        <div className={`${styles.header}`}>
          <input type="checkbox"/>
          <span className={`${styles.fontStyle}`}>Type Something Here..</span>
          <i></i>
        </div>
        {/* content */}
        <div className={`${styles.content}`}>
          this is content
        </div>
        <div className={`${styles.content}`}>
           this is button block 
        </div>
        <TaskList/>
      </div>
    )
  }
}