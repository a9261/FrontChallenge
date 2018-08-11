import React, { Component } from 'react';
import styles from './ItemList.scss';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: 10,
    };
  }

  render() {
    const { results } = this.state;
    return (
      <div className={`${styles['right-content']}`}>
        <div id="filter" className={`${styles['search-filter']}`}>
          <p>Showing {results} results by ...</p>
          <div className={`${styles.clicked}`}>Koashuing</div>
          <div>Entertainment</div>
        </div>
        <div id="content" className={`${styles.content}`}>
          <ul>
            <li>
              <img src="https://fakeimg.pl/220x220/" alt="test" />
              <div className={`${styles.detail}`}>
                <h4>Kogi CosBy Sweater.</h4>
                <p>Donce asdfdsfdsf</p>
                <div className={`${styles.local}`}>
                  <span>主辦單位</span>
                  <div>Entertainment</div>
                  <br />
                  <i className="fas fa-map-marker-alt" /><span>Kaohsiung City</span>
                  <i className="far fa-calendar-alt" /><span>2018/5/24 - 2018/5/31</span>
                </div>
              </div>
            </li>
            <li>
              <img src="https://fakeimg.pl/220x220/" alt="test" />
              <div className={`${styles.detail}`}>
                <h4>Kogi CosBy Sweater.</h4>
                <p>Donce asdfdsfdsf</p>
                <div className={`${styles.local}`}>
                  <span>主辦單位</span>
                  <div>Entertainment</div>
                  <br />
                  <i className="fas fa-map-marker-alt" /><span>Kaohsiung City</span>
                  <i className="far fa-calendar-alt" /><span>2018/5/24 - 2018/5/31</span>
                </div>
              </div>
            </li>
            <li>
              <img src="https://fakeimg.pl/220x220/" alt="test" />
              <div className={`${styles.detail}`}>
                <h4>Kogi CosBy Sweater.</h4>
                <p>Donce asdfdsfdsf</p>
                <div className={`${styles.local}`}>
                  <span>主辦單位</span>
                  <div>Entertainment</div>
                  <br />
                  <i className="fas fa-map-marker-alt" /><span>Kaohsiung City</span>
                  <i className="far fa-calendar-alt" /><span>2018/5/24 - 2018/5/31</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
