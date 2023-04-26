import React, { Component } from 'react';

class ClassCounter extends Component {

    constructor(){
        super();
        this.state = {
            count :0
        }
    
    }
     incrementCount = (num) => {
        this.setState({
            count : this.state.count + num
        })
    }

     decrementCount = (num) => {
        this.setState({
            count : this.state.count - num
        })
    } 

    render() {
        return (
            <div>
                {/* bind method return new function */}
                <button style={{display:'inline'}} onClick={this.decrementCount.bind(this, 2)}>-</button>
                <h3 style={{display:'inline'}}> { this.state.count } </h3>
                <button style={{display:'inline'}} onClick={() => {this.incrementCount(2)}}>+</button>
            </div>
        );
    }
}

export default ClassCounter;