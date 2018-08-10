import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Content from './Content';
import Detail from './Detail';
// import { createConnectComponent } from ''
// import allReducer from './Reducers'

const MyLoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }

  return null;
};
const AsyncContent = Loadable({
    loader: () => import('./Content'),
    loading: MyLoadingComponent
});

const AsyncDetail = Loadable({
    loader: () => import('./Detail'),
    loading: MyLoadingComponent
});
ReactDom.render(
  <Router>
    <div>
      <Switch>
      <Route exact path="/" component={AsyncContent} />
      <Route path="/d" component={AsyncDetail} />
      </Switch>
    </div>
  </Router>,
// {/* <Content/>, */}
  document.getElementById('example'),
);
