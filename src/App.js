import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home'
import NavBar from "./Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <NavBar/>
            <Home/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
