import React from "react";

export default class TimerWithClassState extends React.Component {
    state = {
        count: 0,
        isCounting: false,
    };

    handleReset = () => {
        this.setState({
            count: 0,
            isCounting: false,
        });
    };

    handleStart = () => {
        this.setState({
            isCounting: true,
        });
        this.counterId = setInterval(() => {
            this.setState({ count: this.state.count + 1});
        }, 1000);
    };

    handleStop = () => {
        clearInterval(this.counterId);
        this.setState({
            isCounting: false,
        });
    };

    render() {
        return (
            <div
                className="App"
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    textAlign: "center",
                }}
            >
                <h1>React Timer</h1>
                <h2>{this.state.count}</h2>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>    
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

    