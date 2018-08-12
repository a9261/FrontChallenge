import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  simple: state,
});
class Namer extends Component {
  render() {
    return (
      <div>
        {this.props.simple.name}
      </div>
    );
  }
}
export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Content render');
    console.log(this.props);
    const NamerWrapper = connect(
      mapStateToProps,
      null,
    )(Namer);
    return (
      <div>
        {this.props.simple.name}
      </div>
    );
  }
}
