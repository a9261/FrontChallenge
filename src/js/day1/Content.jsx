import * as React from 'react';
import styles from './ContentWrapper.scss';
import MainContent from './Components/MainContent';
import Header from './Components/Header';
import {createStore, bindActionCreators} from "redux";
import {connect, Provider} from 'react-redux';
import allReducer from './Reducers';
import * as layoutAction from './ActionCreators/Layout'
import {createDefaultConnectComponent} from './ConnectCreator';
export default class Content extends React.Component {
  render() {
    let MainContentContainer = createDefaultConnectComponent(MainContent);
    let HeaderContainer = createDefaultConnectComponent(Header);
    return (
      <div id="content-wrapper" className={`${styles['content-wrapper']}`}>
        <HeaderContainer/>
        <MainContentContainer/>
      </div>
    )
  }
}