import React, { Component } from 'react'
import styles from './TaskEdit.scss'
export default class TaskEdit extends Component {
  render() {
    return (
      <div className={`${styles['main-content']}`}>
        {/* header */}
        <div className={`${styles.header}`}>
          <input type="checkbox"/>
          <span className={`${styles.fontStyle}`}>Type Something Here..</span>
          <i className="far fa-star"></i>
          <i className="fas fa-pen"></i>
        </div>
        {/* content */}
        <div className={`${styles.content}`}>
          this is content
        </div>
        {/* buttons */}
        <div className={`${styles['button-section']}`}>
           <div className={`${styles['button-cancel']}`}>X Cancel</div>
           <div className={`${styles['button-add']}`}>+ Add Task</div>
        </div>
      </div>
    )
  }
}
