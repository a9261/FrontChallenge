import React, { Component } from 'react';
import styles from './item.scss';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.clickedItem = this.clickedItem.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    const { Id, history } = this.props;
    this.id = Id;
    this.history = history;
  }

  clickedItem() {
    const {
      commonAction,
    } = this.props;
    commonAction.setItem({
      resource_id: '92290ee5-6e61-456f-80c0-249eae2fcc97', // the resource id
      limit: 10,
      q: this.id,
    });
    this.history.push(`/d/${this.id}`, { data: this.props });
  }

  handleKeyPress(event) {
    this.history.push(`/d?id=${this.id}`);
  }

  render() {
    const {
      Add, Opentime, Description, Name, Zone, Picdescribe1, Class1, Picture1,
    } = this.props;
    return (
      <li onClick={this.clickedItem} onKeyPress={(event) => { this.handleKeyPress(event); }}>
        <img src={Picture1} alt={Picdescribe1} />
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
