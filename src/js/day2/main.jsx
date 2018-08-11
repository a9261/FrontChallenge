import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter , HashRouter as Router, Route, Switch  } from 'react-router-dom';
import Loadable from 'react-loadable';
import Content from './Content'
import ItemList from './Component/Content/ItemList/ItemList'
import ItemDetail from './Component/Content/ItemDetail/ItemDetail'
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

const AsyncList = Loadable({
  loader: () => import('./Component/Content/ItemList/ItemList'),
  loading: MyLoadingComponent
});
const AsyncDetail = Loadable({
    loader: () => import('./Component/Content/ItemDetail/ItemDetail'),
    loading: MyLoadingComponent
});
const AsyncNotFound = Loadable({
  loader: () => {  return (
    <div>
        <h1>Not Found~~~</h1>
    </div>
);},
  loading: MyLoadingComponent
});
ReactDom.render(
  <Router>
     <Route exact path="/" component={Content}/>
     {/* <Content/> */}
  </Router>,
// {/* <Content/>, */}
  document.getElementById('example'),
);
