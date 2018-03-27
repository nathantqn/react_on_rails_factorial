import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    userInput: "",
    loading: true,
    result: ""
  };

  caclculateFactorial = async () => {
    let response = await fetch("http://localhost:3004/factorial", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        input: {
          number: this.state.userInput
        }
      })
    });
    let response_json = await response.text();
    console.log(response_json);
    this.setState({
      result: response_json
    });
  };
  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={e => this.setState({ userInput: e.target.value })}
        />
        <button onClick={this.caclculateFactorial}>Calculate Factorial</button>
        <br />
        <hr />
        Your Input: <h4>{this.state.userInput}</h4>
        Result: <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default App;
