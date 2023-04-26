import React, { Component } from 'react';
import RandomNumber from './randomNumber';

class ClassUpdates extends Component {
 
    constructor(props){
        super(props);
        this.state={
            count: 0,
            name:'',
            showRandomNumber: false,
        }
    }

    
    componentDidMount() {
        // Only once when component mount
        document.title = `Initialized with ${this.state.count}`;
        console.log('Doc title initialized');
    }

    componentDidUpdate(prevProps, prevState) {
        // Let's update the title with count 
        if(prevState.count !== this.state.count){
            document.title = `Clicked ${this.state.count} times`;
            console.log('Doc title updated');
        }
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={(event)=> {
                    this.setState({
                        name: event.target.value
                    })
                    console.log('Name updated');
                }} />
                <button onClick={()=> this.setState({
                    count: this.state.count+1
                })}> Clicked {this.state.count} times </button>

                <div style={{marginTop:'20px'}}>
                    <button onClick={()=> {this.setState({...this.state, showRandomNumber: !this.state.showRandomNumber})}}>
                        {this.state.showRandomNumber ? <span>Hide</span> : <span>Show</span>}
                    </button>
                    
                    {this.state.showRandomNumber && <RandomNumber />}
                </div>
            </div>
        );
    }
}

export default ClassUpdates;