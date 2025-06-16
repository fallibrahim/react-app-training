import React, {Component} from 'react';

class Count extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            message : false
        };
        
    }
    increment = () => {
      const intervalId = setInterval(() => {
            this.setState(prevState => {
                const newCount = prevState.count + 1;
                
                if (newCount >= 10) {
                    clearInterval(intervalId);
                    this.message = true;
                }
                console.log("Count incremented to: " + newCount);
                return { count: newCount };
            });
        }, 1000);
    };

    render () {
        return (
            <div>
                <h1> Count : {this.state.count}</h1>
                <p>{this.message && "Le compte a atteint 10 !" }</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
export default Count;

