import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Index from "./pages/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Index} />
        {/* <PrivateRoute path="/app" component={Layout} />
      <PublicRoute path="/login" component={Login} /> */}
        {/* <Route component={Error} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
