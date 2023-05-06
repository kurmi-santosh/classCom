import React, { Component } from 'react';

class LifeCycleB extends Component {
     
    shouldComponentUpdate(){
        console.log('LifeCycleB: shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB:  getSnapshotBeforeupdate');
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleB: componentDidMount');
    }

    componentDidUpdate(){
        console.log('LifeCycleB:  ComponentDidUpdate');
    }

    render() {
        console.log('LifeCycleB : render');
        return (
            <h2>
              {this.props.count}  
            </h2>
        );
    }
}

export default LifeCycleB;