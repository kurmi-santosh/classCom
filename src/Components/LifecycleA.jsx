import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifecycleA extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name:'Santosh',
            count:0
        }

        console.log('LifeCycleA :  Constructor');
        
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle A: getDerivedStateFromProps')
        return null;
    }

    shouldComponentUpdate(){
        console.log('LifeCycle A: shouldComponentUpdate');
        return true;
    }
         
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycle A : getSnapshotBeforeupdate');
        return null;
    }

    componentDidMount(){
        console.log('lifecycle A : componentDidMount');
    }

    componentDidUpdate(){
        console.log('LifeCycle A : ComponentDidUpdate');
    }

    incrementCount(){
        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }

    render() {
        console.log('LifeCycle A: render');
        return (
            <>
                <h2>LifeCycle A</h2>
                <LifeCycleB count={this.state.count}/>
                <button onClick={this.incrementCount.bind(this)}>Increment</button>
            </>
        );
    }

    
}

export default LifecycleA;

/*
===================
Mounting Phase
===================
CONSTRUCTOR
* Initialise the component state

GET DERIVED STATE FROM PROPS
* get the props object and update state

COMPONENT DID MOUNT
* component mounted and here we can place side effects

RENDER
* renders the DOM

*/

/*
===================
Updating Phase 
===================
CONSTRUCTOR
* Initialise the component state

GET DERIVED STATE FROM PROPS (Static method)
* get the props object and update state

RENDER
* renders the DOM

>> Children and then

GET SNAPSHOT BEFORE UPDATE(prevProps, prevState)
* component mounted and here we can place side effects

(After render finished in Re-render cycles)
COMPONENT DID UPDATE (prevProps. prevState, snapshot)
* This means, component and all the sub components are properly rendered 

*/