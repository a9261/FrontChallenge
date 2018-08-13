import React, { Component } from 'react';
import styles from './ItemDetail.scss';

export default class ItemDetail extends Component {
  constructor(props) {
    super(props);
    const {
      match, commonAction, item,
    } = this.props;
    const { id } = match.params;
    if (Object.keys(item).length === 0) {
      commonAction.setItem({
        resource_id: '92290ee5-6e61-456f-80c0-249eae2fcc97', // the resource id
        limit: 10,
        q: id,
      });
    }
  }

  render() {
    const {
      item,
    } = this.props;
    console.log(item);
    return (
      <div className={`${styles['right-content']}`}>
        <div id="breadcrumbs" className={`${styles.breadcrumbs}`}>
          <span>Explore</span>
          <span> / </span>
          <span>{item.Name}</span>
        </div>
        <div id="content" className={`${styles.content}`}>
          <img src={item.Picture1} alt={item.Picdescribe1} />
          <div className={`${styles.detail}`}>
            <h1>{item.Name}</h1>
            <div className={`${styles.local}`}>
              <span>主辦單位</span>
              <div>{item.Name}</div>
              <br />
              <i className="fas fa-map-marker-alt" /><span>{item.Zone}</span>
              <i className="far fa-calendar-alt" /><span>{item.Opentime}</span>
            </div>
            <div className={`${styles.describe}`}>
              {item.Description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
