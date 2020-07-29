import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navigationbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/landing" className="nav-link">
              Landing page
            </Link>
          </li>
          <li>
            <Link to="/ManagerPage" className="nav-link">
              Manager page
            </Link>
          </li>
          <li>
            <Link to="/WorkerPage" className="nav-link">
              Worker page
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              login
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
