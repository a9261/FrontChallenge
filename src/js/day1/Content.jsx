import * as React from 'react'
import styles from './ContentWrapper.scss'
import MainContent from './Components/MainContent';
import Header from './Components/Header'
export default class Content extends React.Component {
  render() {
    return (
      <div id="content-wrapper" className={`${styles['content-wrapper']}`}>
        <Header/>
        <MainContent/>
      </div>
    )
  }
}