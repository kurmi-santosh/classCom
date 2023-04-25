import React, { Component } from 'react';

class Counter extends Component {
    
    shouldComponentUpdate(){
        console.log('Counter: shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Counter:  getSnapshotBeforeupdate');
        return null;
    }

    componentDidMount(){
        console.log('Counter: componentDidMount');
    }

    componentDidUpdate(){
        console.log('Counter:  ComponentDidUpdate');
    }

    render() {
        console.log('Counter : render');
        return (
            <h2>
              {this.props.count}  
            </h2>
        );
    }
}

export default Counter;