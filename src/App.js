import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  useEffect(() => {
    API.findUsers().then((results) => {
      console.log(results.data.results);
    });
  }, []);

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
