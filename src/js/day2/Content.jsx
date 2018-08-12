import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { inherits } from 'util';
import styles from './Content.scss';
import Menu from './Component/Menu/Menu';
import Header from './Component/Header/Header';
import ItemList from './Component/Content/ItemList/ItemList';
import ItemDetail from './Component/Content/ItemDetail/ItemDetail';
import { createConnectComponent } from './Reducers/ConnectCreator';

export default class Content extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.init();
  }

  init() {
    this.ItemListContainer = createConnectComponent(ItemList);
    this.ItemDetailContainer = createConnectComponent(ItemDetail);
    this.MenuContainer = createConnectComponent(Menu);
  }

  render() {
    console.log('Content Render');
    const MenuContainer = this.MenuContainer;
    return (
      <div className="container-fluid">
        <div className="row ">
          <Header />
        </div>
        <div className="row">
          <div name="left-menu" className=" col-lg-4 col-xl-2 pl-4 ">
            {/* <Menu {...this.props} /> */}
            <MenuContainer {...this.props} />
          </div>
          <div name="right-content" className="col-lg-8 col-xl-8">
            {/* <ItemList /> */}
            {/* {children} */}
            <Switch>
              <Route path="/l" component={this.ItemListContainer} />
              <Route path="/d" component={this.ItemDetailContainer} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
