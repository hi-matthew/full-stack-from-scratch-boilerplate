import React, { Component } from "react";

class App extends Component {
  state = {
    something: "this is a piece of state"
  };

  componentDidMount() {
    console.log("the component mounted!");
  }

  render() {
    return <h1>You created a react app from scratch!!</h1>;
  }
}

export default App;
