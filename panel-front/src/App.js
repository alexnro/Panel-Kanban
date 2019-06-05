import React from 'react';
import { Route } from 'react-router-dom';
// import './App.css';
import Header from './containers/Header/Header';
import Login from './containers/Login/Login';
import Panel from './containers/Panel/Panel';
import Kanban from './components/Kanban/Kanban';


const App = () => (

  <div>
    <Header />
    <Route exact path="/login" component={Login} />
    <Route path="/panel" component={Panel} />
    <Route path="/kanban" component={Kanban} />
  </div>

)

export default App;
