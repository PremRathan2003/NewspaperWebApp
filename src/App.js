import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen';
import ArticleDetail from './components/ArticleDetail/ArticleDetail';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/article/:id" component={ArticleDetail} />
      </Switch>
    <Footer/>
    </>
    
  );
};

export default App;
