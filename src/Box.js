import React, { Component } from 'react';
import {choice} from './helpers'
import './Box.css';

class Box extends Component {
    static defaultProps = {
    } //sets the default colors

    constructor(props){ //initalizes the state with a random color and binds the event handler
        super(props);
        this.state = {color: choice(this.props.colors)}
        this.handleClick = this.handleClick.bind(this);
    }

    pickColor(){
        let newColor; // chooses a new color different from the current and sets state
        do {
            newColor = choice(this.props.colors); // Assign the result of choice to newColor
        } while (newColor === this.state.color);
        this.setState({color: newColor});
    }
    

    handleClick (){
        this.pickColor() //calls pickColor when clicked
    } 

    render (){ //defines what gets displayed on scene
        return(
            <div className='Box' style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
            </div>
        )
    }
}

export default Box; // Correct name for exporting this child component
