import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";

export default class ManagerPage extends PureComponent {
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
        <h1>this is manager page</h1>
        <br></br>
        <button type="submit" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}
