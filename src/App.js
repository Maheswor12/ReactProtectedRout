import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import landing from "./Component/LandingPage";
import Navigationbar from "./Component/Navigationbar";
import ManagerPage from "./Component/ManagerPage";
import WorkerPage from "./Component/WorkerPage";
import login from "./Component/loginPage";
import Private from "./Component/private/private";
import PrivateWorker from "./Component/private/PrivateWorker";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Navigationbar} />
      <Route exact path="/landing" component={landing} />
      <Route exact path="/login" component={login} />
      <Private exact path="/ManagerPage" component={ManagerPage} />
      <PrivateWorker exact path="/WorkerPage" component={WorkerPage} />
    </BrowserRouter>
  );
}

export default App;
