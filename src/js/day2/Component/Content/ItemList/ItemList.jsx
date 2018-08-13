import React, { Component } from 'react';
import {
  withRouter,
} from 'react-router-dom';
import styles from './ItemList.scss';
import Item from '../Item/Item';
import { createConnectComponent } from '../../../Reducers/ConnectCreator';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.total = 0;
    this.currentOffset = 0;
    this.state = {
      currentOffset: 0,
    };
  }

  onPageChange(offset) {
    const { history, commonAction, commonData } = this.props;
    this.setState({
      currentOffset: commonData.offset,
    });
    commonAction.setItemList({
      resource_id: '92290ee5-6e61-456f-80c0-249eae2fcc97', // the resource id
      limit: 10,
      q: commonData.q,
      offset: offset <= 0 ? 0 : offset,
    }, history);
  }

  getItems() {
    const { commonData } = this.props;
    const NewItem = withRouter(createConnectComponent(Item, null));
    return commonData.items.map(item => <NewItem key={item.Id} {...item} />);
  }


  getPageNum() {
    const pageSize = 10;
    const totalPage = Math.round(this.total / pageSize);
    const pages = [];
    for (let index = 1; index <= totalPage; index++) {
      pages.push(<li key={index} onClick={() => { this.onPageChange(pageSize * (index - 1)); }} className="page-item"><span className="page-link">{index}</span></li>);
    }
    return (
      pages
    );
  }


  render() {
    console.log('ItemList render');
    const { commonData } = this.props;
    const { currentOffset } = this.state;
    this.total = commonData.total ? commonData.total : 0;
    return this.total === 0
      ? (
        <div className={`${styles['right-content']}`}>
         Content is empty
        </div>
      )
      : (
        <div className={`${styles['right-content']}`}>
          <div id="filter" className={`${styles['search-filter']}`}>
            <p>Showing {commonData.total} results by ...</p>
            {/* <div className={`${styles.clicked}`}>Koashuing</div>
          <div>Entertainment</div> */}
          </div>
          <div id="content" className={`${styles.content}`}>
            <ul>
              {this.getItems()}
            </ul>
          </div>
          <div className={`${styles['pagging-bar']}`}>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item" onClick={() => { this.onPageChange(currentOffset - 10); }}>
                  <span className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </span>
                </li>
                {this.getPageNum()}
                <li className="page-item" onClick={() => { this.onPageChange(currentOffset + 10); }}>
                  <span className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      );
  }
}
