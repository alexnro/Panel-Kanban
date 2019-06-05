import React, { Component } from 'react';
// import './Kanban.css';
import KanbanBoard from './KanbanBoard';

class Kanban extends Component {

    render(){
		const style = {
			'padding': '30px',
			'paddingTop': '5px',
		};
    
		return(
      <div style={ style }>
        <h1>Project Kanban Board</h1>
				<KanbanBoard />
      </div>
		);
	}
}

export default Kanban;