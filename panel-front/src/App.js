import React from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Panel from './containers/Panel/Panel';
import Logout from './containers/Logout/Logout';
import Perfil from './containers/Usuario/Perfil';

const App = () => (

  <div>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/panel" component={Panel} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/perfil" component={Perfil} />
  </div>

)

export default App;
