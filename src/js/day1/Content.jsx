import * as React from 'react';
import styles from './ContentWrapper.scss';
import MainContent from './Components/MainContent';
import Header from './Components/Header';
import {createStore,bindActionCreators} from "redux";
import {connect,Provider} from 'react-redux';
import allReducer from './Reducers';
import * as layoutAction from './ActionCreators/Layout'
export default class Content extends React.Component {
  render() {
    let store = createStore(allReducer);
    //connnect mapStateToProps 要使用那些State mapDispatchToProps 要使用那些Action Creator
    const mapStateToProps = (state) => {
      return {layoutData: state.layoutProcess}
    };
    const mapDispatchToProps = (dispatch) => {
      return {
        layoutAction: bindActionCreators(layoutAction, dispatch)
      };
    };
    const MainContentContainer = connect(mapStateToProps, mapDispatchToProps)(MainContent);
    return (
      <div id="content-wrapper" className={`${styles['content-wrapper']}`}>
        <Header/>
        {/* <Provider store={store}>
          <MainContentContainer/>
        </Provider> */}
        <MainContent/>
      </div>
    )
  }
}