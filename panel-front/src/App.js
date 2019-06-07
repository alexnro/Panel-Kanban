import React from 'react';
import { Route } from 'react-router-dom';
// import './App.css';
import Header from './containers/Header/Header';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Panel from './containers/Panel/Panel';
import Kanban from './containers/Tareas/Kanban';


const App = () => (

  <div>
    <Header />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/panel" component={Panel} />
    <Route path="/kanban" component={Kanban} />
  </div>

)

export default App;
