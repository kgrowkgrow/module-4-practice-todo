import React, { Component } from 'react';
import ButtonContainer from './ButtonContainer'
import TaskList from './TaskList';

class TaskContainer extends Component {

    state = {
        tasks: [
          {
            text: 'Buy rice',
            category: 'Food'
          },
          {
            text: 'Save a tenner',
            category: 'Money'
          },
          {
            text: 'Build a todo app',
            category: 'Code'
          },
          {
            text: 'Build todo API',
            category: 'Code'
          },
          {
            text: 'Get an ISA',
            category: 'Money'
          },
          {
            text: 'Cook rice',
            category: 'Food'
          },
          {
            text: 'Tidy house',
            category: 'Misc'
          }
        ],

        selected: "All"
     
    }

    handleClick = (e) => {
        this.setState({selected: e.target.textContent})
    }

    filterTasks = () => {
        if (this.state.selected === "All") {
            return this.state.tasks
        }
        return this.state.tasks.filter(task => task.category === this.state.selected)
    }
    render() {
        return (
            <div>
                <ButtonContainer handleClick={this.handleClick} selected={this.state.selected}/>
                <h5>Tasks:</h5>
                <TaskList tasks={this.filterTasks()}/>
            </div>
        );
    }
}

export default TaskContainer;
