import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {HashRouter as Router,withRouter,Route } from 'react-router-dom';
// import {Route} from './myRouter'
import Loadable from 'react-loadable';
import Content from './Content'
import ItemList from './Component/Content/ItemList/ItemList'
import ItemDetail from './Component/Content/ItemDetail/ItemDetail'
import { createConnectComponent } from './Reducers/ConnectCreator'
import allReducer from './Reducers/CommonReducer';

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



const ContentContainer = withRouter(createConnectComponent(Content,null,null))
const store = createStore(allReducer,applyMiddleware(thunk))
ReactDom.render(
  <Provider store={store}>
    <Router >
       <Route path="/" component={ContentContainer} />  
      {/* <ContentContainer /> */}
    </Router >
  </Provider>
  ,
// {/* <Content/>, */}
  document.getElementById('example'),
);
