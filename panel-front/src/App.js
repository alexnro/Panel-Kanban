import React from 'react';
import { Route } from 'react-router-dom';
import Header from './containers/Header/Header';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Panel from './containers/Panel/Panel';
// import Tareas from './components/Tareas/Tareas';


const App = () => (

  <div>
    <Header />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/panel" component={Panel} />
    {/* <Route path="/spring" component={Tareas} /> */}
  </div>

)

export default App;
