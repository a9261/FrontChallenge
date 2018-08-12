import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import Content from './content';
import simpleReducer from './simpleReducer';

function t(name) {
  return {
    type: 'SHOW_NAME',
    name,
  };
}
const mapStateToProps = state => ({
  simple: state,
});
const mapDispatchToProps = dispatch => ({
  simpleAction: bindActionCreators(t, dispatch),
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    console.log('clicked');
    console.log(this.props);
    this.props.simpleAction(`${this.props.simple.name} A`);
  }

  render() {
    console.log('App render');
    const ContentWrapper = connect(
      mapStateToProps,
      mapDispatchToProps,
    )(Content);
    return (
      <div>
        <div onClick={this.clicked}> ClickMe </div>
        <ContentWrapper />
      </div>
    );
  }
}

const AppWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
const store = createStore(simpleReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  document.getElementById('example'),
);
