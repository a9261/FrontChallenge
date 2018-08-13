import React, { Component } from 'react';
import styles from './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.onEnterSearch = this.onEnterSearch.bind(this);
  }

  onEnterSearch(evt) {
    if (evt.key === 'Enter') {
      const keyword = this.refs.keyword.value;
      const { history, commonAction } = this.props;
      console.log(keyword);
      commonAction.setItemList({
        resource_id: '92290ee5-6e61-456f-80c0-249eae2fcc97', // the resource id
        limit: 10,
        q: keyword,
      }, history);
    }
  }

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
              <input type="text" placeholder="Explore your own activities" ref="keyword" onKeyPress={(evt) => { this.onEnterSearch(evt); }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
