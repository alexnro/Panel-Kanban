import React, { Component } from 'react';
import KanbanColumn from './KanbanColumn';
import projectList from './KanbanCard';


class KanbanBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			projects: [],
			draggedOverCol: 0
		};
		this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
		this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
		this.columns = [
			{ name: 'Planning', stage: 1 },
			{ name: 'Design', stage: 2 },
			{ name: 'In Progress', stage: 3 },
			{ name: 'Testing', stage: 4 },
			{ name: 'Launch', stage: 5 },
		];
	}

	projectList = [
		{
		  name: 'Project 1',
		  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		  project_stage: 1
		},
		{
		  name: 'Project 2',
		  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		  project_stage: 1
		},
		{
		  name: 'Project 3',
		  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		  project_stage: 1
		},
		{
		  name: 'Project 4',
		  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		  project_stage: 2
		},
		{
		  name: 'Project 5',
		  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		  project_stage: 3
		},
		{
		  name: 'Project 6',
		  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		  project_stage: 3
		},
		{
		  name: 'Project 7',
		  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		  project_stage: 4
		},
	  ];

	componentDidMount() {
		this.setState({ projects: projectList, isLoading: false });
	}

	//this is called when a Kanban card is dragged over a column (called by column)
	handleOnDragEnter(e, stageValue) {
		this.setState({ draggedOverCol: stageValue });
	}

	//this is called when a Kanban card dropped over a column (called by card)
	handleOnDragEnd(e, project) {
		const updatedProjects = this.state.projects.slice(0);
		updatedProjects.find((projectObject) => { return projectObject.name === project.name; }).project_stage = this.state.draggedOverCol;
		this.setState({ projects: updatedProjects });
	}

	render() {
		if (this.state.isLoading) {
			return (<h3>Loading...</h3>);
		}

		return (
			<div>
				{this.columns.map((column) => {
					return (
						<KanbanColumn
							name={column.name}
							stage={column.stage}
							projects={this.setState().projects.filter((project) => { return parseInt(project.project_stage, 10) === column.stage; })}
							onDragEnter={this.handleOnDragEnter}
							onDragEnd={this.handleOnDragEnd}
							key={column.stage}
						/>
					);
				})}
			</div>
		);
	}
}

export default KanbanBoard;