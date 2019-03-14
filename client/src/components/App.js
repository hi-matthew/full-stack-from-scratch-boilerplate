import React, { Component } from "react";

class App extends Component {
  state = {
    something: "this is a piece of state"
  };

  componentDidMount() {
    alert("the component mounted!");
  }

  render() {
    return <div>You created a react app from scratch!!</div>;
  }
}

export default App;
