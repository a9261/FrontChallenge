import React, { Component } from 'react';
import styles from './Menu.scss';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.onLocationChange = this.onLocationChange.bind(this);
  }

  onLocationChange() {
    const { history, commonAction } = this.props;
    const { local } = this.refs;
    commonAction.setItemList({
      resource_id: '92290ee5-6e61-456f-80c0-249eae2fcc97', // the resource id
      limit: 10,
      q: local.value,
    }, history);
  }

  render() {
    console.log('Menu Render');
    return (
      <div className={`${styles['left-menu']}`}>
        <div className={`${styles.location}`}>
          <h5>Location</h5>
          <select onChange={this.onLocationChange} ref="local">
            <option value="楠梓區">楠梓區</option>
            <option value="左營區">左營區</option>
            <option value="三民區">三民區</option>
            <option value="旗津區">旗津區</option>
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
              <label htmlFor="entertainment">景點是否付費</label>
            </li>
            <li>
              <input id="food" type="checkbox" name="localtion" value="all" />
              <label htmlFor="food" className={`${styles.cusChk}`} />
              <label htmlFor="food">是否全天候開放</label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
