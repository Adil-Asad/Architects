import React, { Component } from "react";

export default class classPage2 extends Component {
  state = {
    count: 0,
    todos: [],
  };
  componentDidMount() {
    console.log(" mounted!");
  }
  componentDidUpdate(a, preState) {
    console.log("updated! Previous Value", preState.count);
  }

  componentWillUnmount() {
    console.log(console.log("components will be unmounted soon"));
  }

  handleInc = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDec = () => {
    this.setState((preVal) => ({
      count: preVal.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Value is : {this.state.count}</h1>
        <button onClick={this.handleInc}>Increment</button>
        <button onClick={this.handleDec}>Decrement</button>
      </div>
    );
  }
}
