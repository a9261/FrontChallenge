import React, { Component } from 'react';
import styles from './ItemDetail.scss';

export default class ItemDetail extends Component {
  render() {
    return (
      <div className={`${styles['right-content']}`}>
        <div id="breadcrumbs" className={`${styles.breadcrumbs}`}>
          <span>Explore</span>
          <span> / </span>
          <span>Kogi Cosby</span>
        </div>
        <div id="content" className={`${styles.content}`}>
          <img src="https://fakeimg.pl/644x352/" alt="t" />
          <div className={`${styles.detail}`}>
            <h1>Kogi cosBy</h1>
            <div className={`${styles.local}`}>
              <span>主辦單位</span>
              <div>Entertainment</div>
              <br />
              <i className="fas fa-map-marker-alt" /><span>Kaohsiung City</span>
              <i className="far fa-calendar-alt" /><span>2018/5/24 - 2018/5/31</span>
            </div>
            <div className={`${styles.describe}`}>
                    asdasdkljaksdlkjs
            </div>
          </div>
        </div>
      </div>
    );
  }
}
