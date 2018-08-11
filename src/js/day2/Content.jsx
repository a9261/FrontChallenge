import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './Content.scss';
import Menu from './Component/Menu/Menu';
import Header from './Component/Header/Header';
import ItemList from './Component/Content/ItemList/ItemList';
import ItemDetail from './Component/Content/ItemDetail/ItemDetail';

export default class Content extends Component {
  render() {
    const { children } = this.props;
    console.log(this.props);
    console.log(children);
    return (
      <div className="container-fluid">
        <div className="row ">
          <Header />
        </div>
        <div className="row">
          <div name="left-menu" className=" col-lg-4 col-xl-2 pl-4 ">
            <Menu />
          </div>
          <div name="right-content" className="col-lg-8 col-xl-8">
            {/* <ItemList /> */}
            {/* {children} */}
            <Switch>
              <Route path="/l" component={ItemList} />
              <Route path="/d" component={ItemDetail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
