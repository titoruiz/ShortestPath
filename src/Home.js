import React from "react";
import NavBar from "./Nav";
import './App.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-Header">
        <p className="Title">Wiki Article Connection Analyser</p>
      </header>
      <div id="AboutSection">
        <h2 className="DatasetsTitle">Collaborators</h2>
        <p>Aditi</p>
        <p>Tito Ruiz</p>
        <p>Anna Stvilia</p><br/>
        <h2 className="AboutTitle">About This Project:</h2>
        <p>
          gjfdjdgjfdgjfdgjfdgjlfdgljdgljkfdgljkf dgfuosh dsfldsfjlkds wfw
        </p>
        <h2 className="DatasetsTitle">API Utilized:</h2>
        <p>
          blah blah blah 
        </p>
        <h2 className="LinksTitle">Links:</h2>
        <a href="https://www.acaps.org/covid-19-government-measures-dataset">
          ahh
        </a>
      </div>
    </div>
  );
};

export default Home;