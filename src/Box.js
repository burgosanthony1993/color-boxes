import React, { Component } from 'react';
import {choice} from './helpers'
import './Box.css';

class Box extends Component {
    static defaultProps = {
        allColors: ['purple', 'magenta', 'lilac', 'pink']
    }

    constructor(props){
        super(props);
        this.state = {color: choice(props.allColors)}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (){

    } // function logic goes in here

    render (){
        return(
            <div className='Box' style={{backgroundColor: this.state.color}} onClick={this.handleClick}>

            </div>
        )
    }
}

export default Box; // Correct name for exporting the component
