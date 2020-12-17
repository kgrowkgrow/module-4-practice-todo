import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {


    populateTasks = () => {
       return this.props.tasks.map(task => {
         return <Task data={task}/>
        })
    }

    render() {
        return (
            <div className="tasks">
                {this.populateTasks()}
            </div>
        );
    }
}

export default TaskList;
