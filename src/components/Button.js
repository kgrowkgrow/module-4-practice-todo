import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
                <button className={this.props.selected ? "selected" : null}>{this.props.data}</button>
            
        );
    }
}

export default Button;
