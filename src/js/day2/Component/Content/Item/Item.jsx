import React, { Component } from 'react';
import styles from './item.scss';

export default class Item extends Component {
  render() {
    const {
      Add, Opentime, Description, Name, Zone, Picdescribe1, Class1, Picture1,
    } = this.props;
    return (
      <li>
        <img src={Picture1} alt="test" />
        <div className={styles.detail}>
          <h4>{Name}</h4>
          <p>{Description}</p>
          <div className={styles.local}>
            <span>{Picdescribe1}</span>
            <div>{Class1}</div>
            <div>
              <i className="fas fa-map-marker-alt" /><span>{Zone}</span>
              <i className="far fa-calendar-alt" /><span>{Opentime}</span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
