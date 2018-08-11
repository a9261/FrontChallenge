import React, { Component } from 'react';
import styles from './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className={`col-md-12 col-xl-12 ${styles.header}`}>
        <div className={`row align-items-center ${styles.content}`}>
          <div className="col-md-1 offset-md-2">
            <h1>HaveFun</h1>
          </div>
          <div className="col-md-1 offset-md-2">
            <div className={`${styles.searchBox}`}>
              <i className="fas fa-search" />
              <input type="text" placeholder="Explore your own activities" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
