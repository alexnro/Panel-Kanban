import React from 'react';
import { Route } from 'react-router-dom';
// import './App.css';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Panel from './containers/Panel/Panel';
import Logout from './containers/Logout/Logout';
import Navegacion from './containers/Header/Navegacion';
// import Lateral from './containers/Header/Lateral';


const App = () => (

  <div>
    {/* <Lateral /> */}
    <Navegacion />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/panel" component={Panel} />
    <Route path="/logout" component={Logout} />
  </div>

)

export default App;
