import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import './index.css';
import App from './App';
import Tareas from './store/reducers/Tareas';
import Kanban from './store/reducers/Kanban';

const store = createStore(Kanban);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);



ReactDOM.render(app, document.getElementById('root'));
