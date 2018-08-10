import React, { Component } from 'react';
import styles from './Detail.scss';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: 10,
    };
  }

  render() {
    const { results } = this.state;
    return (
      <div className="container-fluid">
        <div className={`${styles.header} row`}>
          <div className="row align-items-center">
            <div className="col-md-1 offset-md-2">
              <h1>HaveFun</h1>
            </div>
            <div className="col-md-1 offset-md-6">
              <div className={`${styles.searchBox}`}>
                <i className="fas fa-search" />
                <input type="text" placeholder="Explore your own activities" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div name="left-menu" className={`${styles['left-menu']}  col-lg-4 col-xl-2 pl-4 `}>
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
          <div name="right-content" className={`${styles['right-content']} col-lg-8 col-xl-8`}>
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
        </div>
      </div>
    );
  }
}
