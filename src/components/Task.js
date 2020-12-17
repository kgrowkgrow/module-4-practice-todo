import React, { Component } from 'react';

class Task extends Component {
    render() {

        const {text, category} = this.props.data 

        return (
            <div className="task">
                <p className="label">{category}</p>
                <p className="text">{text}</p>
            </div>
        );
    }
}

export default Task;
