import * as React from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import styles from './ContentWrapper.scss';
import MainContent from './Components/MainContent';
import Header from './Components/Header';
import allReducer from './Reducers';
import * as layoutAction from './ActionCreators/Layout';
import { createDefaultConnectComponent, createConnectComponent } from './ConnectCreator';

export default class Content extends React.Component {
  render() {
    const mapStateToProps = state => ({
      filteredItemData: state.filteredProcess,
    });
    const MainContentContainer = createDefaultConnectComponent(MainContent);
    const HeaderContainer = createConnectComponent(Header, mapStateToProps);
    return (
      <div id="content-wrapper" className={`${styles['content-wrapper']}`}>
        <HeaderContainer {...this.props} />
        <MainContentContainer />
      </div>
    );
  }
}
