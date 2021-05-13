import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    API.findUsers().then((results) => {
      setUsers(results.data.results);
    });
  }, []);

  return (
    <div className="App">
      <SearchBar users={users} />
    </div>
  );
}
export default App;
