import React, { Component } from 'react';

class RandomNumber extends Component {

    constructor(props){
        super(props);
        this.state = {
            num:0
        }
    }

    generateRandomNumber = ()=> {
        console.log('Generating random number');
        this.setState({
            num: Math.round(Math.random()*100,2)
        })
    }

    componentDidMount() {
        this.timerID = setInterval(()=> {
            this.generateRandomNumber()
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
            </div>
        );
    }
}

export default RandomNumber;