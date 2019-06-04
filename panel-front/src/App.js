import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './containers/Header/Header';
import Login from './containers/Login/Login';
import Panel from './containers/Panel/Panel';


const App = () => (

  <BrowserRouter>
      <Header />
      <Route exact path="/login" component={Login} />
      <Route path="/panel" component={Panel} />
  </BrowserRouter>

)

export default App;
