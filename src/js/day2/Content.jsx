import React, { Component } from 'react';
import {
  HashRouter as Router, Route, Switch, withRouter,
} from 'react-router-dom';
// import { Route, Switch } from './myRouter';
import styles from './Content.scss';
import Menu from './Component/Menu/Menu';
import Header from './Component/Header/Header';
import ItemList from './Component/Content/ItemList/ItemList';
import ItemDetail from './Component/Content/ItemDetail/ItemDetail';
import { createConnectComponent } from './Reducers/ConnectCreator';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.ItemListContainer = (createConnectComponent(ItemList));
    this.ItemDetailContainer = (createConnectComponent(ItemDetail));
    this.HeaderContainer = withRouter(createConnectComponent(Header, null));
    this.MenuContainer = withRouter(createConnectComponent(Menu, null));
  }

  render() {
    console.log('Content Render');
    const MenuContainer = this.MenuContainer;
    const HeaderContainer = this.HeaderContainer;
    return (
      <div className="container-fluid">
        <div className="row ">
          <HeaderContainer />
        </div>
        <div className="row">
          <div name="left-menu" className=" col-lg-4 col-xl-2 pl-4 ">
            {/* <Menu {...this.props} /> */}
            <MenuContainer />
          </div>
          <div name="right-content" className="col-lg-8 col-xl-8">
            {/* <ItemList /> */}
            {/* {children} */}
            <Router>
              <Switch>
                <Route path="/l" component={this.ItemListContainer} />
                <Route path="/d/:id" component={this.ItemDetailContainer} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
