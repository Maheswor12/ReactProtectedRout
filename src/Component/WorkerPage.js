import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class WorkerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutsuccess: "false",
    };
  }
  logout = (event) => {
    event.preventDefault();
    localStorage.setItem("status", "");
    this.setState({ logoutsuccess: true });
  };

  render() {
    if (this.state.logoutsuccess === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>this is worker page</h1>
        <br></br>
        <button type="submit" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}
