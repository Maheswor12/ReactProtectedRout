import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class loginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      manager: false,
      worker: false,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // useState(true);
    if (this.state.username === "manager") {
      localStorage.setItem("status", "authorizedmanager");
      this.setState({ manager: true, worker: false });
    } else if (this.state.username === "worker") {
      localStorage.setItem("status", "authorizedworker");

      this.setState({ worker: true, manager: false });
    }
  };
  handleAll = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    if (this.state.manager === true) {
      return <Redirect to="/ManagerPage" />;
    } else if (this.state.worker === true) {
      return <Redirect to="/WorkerPage" />;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleAll}
          />
          <br></br>
          {/* <label>password:</label>
          <input
            type="password"
            password="password"
            value={this.state.password}
            onChange={this.handleAll}
          /> */}
          <br></br>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
