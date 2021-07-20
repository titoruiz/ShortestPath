import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home'
import NavBar from "./Nav";
import react from "react"
 
class App extends react.Component {
  constructor(props){
    super(props);
    this.state = {
      start : '',
      dest1: '',
      dest2: '',
      reqested: false,
      apiSuccess: false,
      startSuccess: false,
      d1Success: false,
      d2Success: false
    };
  }
 
  changeStart = (value) => {
    this.setState({start: value});
  }
 
  changeDest1 = (value) => {
    this.setState({dest1: value});
  }
 
  changeDest2 = (value) => {
    this.setState({dest2: value});
  }
 
  changeRequest  = (value) => {
    this.setState({reqested: value});
  }
 
 
  render (){
    return (
      <div className="App">
        <Router>
          <Switch>
  
            <Route exact path="/">
              <NavBar/>
              <Home/>
            </Route>
 
            <Route path="/visualize">
              <NavBar/>
            </Route>
  
          </Switch>
        </Router>
      </div>
    );
  }
}
 
export default App;
