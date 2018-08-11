import React, { Component } from 'react';
import styles from './Menu.scss';

export default class Menu extends Component {
  render() {
    return (
      <div className={`${styles['left-menu']}`}>
        <div className={`${styles.location}`}>
          <h5>Location</h5>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        {/* endLocation */}
        <div className={`${styles['date-block']}`}>
          <h5>Date</h5>
          <div>
            <label htmlFor="from">from</label>
            <input id="from" type="text" />
          </div>
          <div>
            <label htmlFor="to">to</label>
            <input id="to" type="text" />
          </div>
        </div>
        {/* endDateBlock */}
        <div className={`${styles.categories}`}>
          <h5>Categories</h5>
          <ul>
            <li>
              <input id="all" type="checkbox" name="localtion" value="all" />
              <label htmlFor="all" className={`${styles.cusChk}`} />
              <label htmlFor="all">All</label>
            </li>
            <li>
              <input id="entertainment" type="checkbox" name="localtion" value="all" />
              <label htmlFor="entertainment" className={`${styles.cusChk}`} />
              <label htmlFor="entertainment">Entertainment</label>
            </li>
            <li>
              <input id="food" type="checkbox" name="localtion" value="all" />
              <label htmlFor="food" className={`${styles.cusChk}`} />
              <label htmlFor="food">Food</label>
            </li>
            <li>
              <input id="learning" type="checkbox" name="localtion" value="all" />
              <label htmlFor="learning" className={`${styles.cusChk}`} />
              <label htmlFor="learning">Learning</label>
            </li>
            <li>
              <input id="outdoors" type="checkbox" name="localtion" value="all" />
              <label htmlFor="outdoors" className={`${styles.cusChk}`} />
              <label htmlFor="outdoors">Outdoors</label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
