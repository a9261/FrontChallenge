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
    console.log('ItemList render');
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
        <div className={`${styles['pagging-bar']}`}>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
