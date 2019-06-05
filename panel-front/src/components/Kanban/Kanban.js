import React, { Component } from 'react';
import Item from './componentes/Item';
import Button from './componentes/Button';
import _ from 'lodash';
import './Kanban.css';

class Kanban extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : [
        {
          name  : "Nota"
        }
      ]
    }
  }

  _remove(position){
    let { data } = this.state;

    let newData = [
      ...data.slice(0, position),
      ...data.slice(position + 1),
    ]

    this.setState({ data : newData });

  }

  _add(){
    let { data } = this.state;
    let newData = [
      ...data,
      {
        name  : "Nota"
      }
    ]
    this.setState({ data : newData });
  }

  render() {
    return (
      <div className="app">
        <ul className="todo-list">
          {this.state.data.map(
            (item,index) =>
              <Item data={item} key={index} onRemove={ () => this._remove(index)} />
            )
          }
        </ul>
        <div className="footer">
          <Button
            onClick={this._add.bind(this)}
            name="Añadir nota"
          />
        </div>
      </div>
    );
  }
}

export default Kanban;