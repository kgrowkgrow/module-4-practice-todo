import React, { Component } from 'react';
import Button from './Button';
import { CATEGORIES } from '../data'

class ButtonContainer extends Component {

    makeButtons = () => {
       return CATEGORIES.map(category => {
           return <Button selected={category === this.props.selected} data={category} />
        })
    }


    render() {
        return (
            <div className="categories" onClick={this.props.handleClick}>
                {this.makeButtons()}
            </div>
        );
    }
}

export default ButtonContainer;
