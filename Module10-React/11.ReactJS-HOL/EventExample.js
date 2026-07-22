import React, { Component } from "react";

class EventExample extends Component {

    constructor() {
        super();

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    sayHello = () => {
        alert("Hello! Have a nice day.");
    };

    increaseAndHello = () => {
        this.increment();
        this.sayHello();
    };

    sayWelcome = (message) => {
        alert(message);
    };

    onPress = () => {
        alert("I was clicked");
    };

    render() {
        return (
            <div>

                <h2>Counter Value: {this.state.count}</h2>

                <button onClick={this.increaseAndHello}>
                    Increment
                </button>

                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br /><br />

                <button
                    onClick={() =>
                        this.sayWelcome("Welcome")
                    }
                >
                    Say Welcome
                </button>

                <br /><br />

                <button onClick={this.onPress}>
                    Synthetic Event
                </button>

            </div>
        );
    }
}

export default EventExample;