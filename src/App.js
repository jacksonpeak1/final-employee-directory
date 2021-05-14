import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./utils/API";
import EmployeeTable from "./components/EmployeeTable";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [order, setOrder] = useState("a");

  useEffect(() => {
    API.findUsers().then((results) => {
      setUsers(results.data.results);
      setFiltered(results.data.results);
    });
  }, []);

  const handleChange = (event) => {
    const input = event.target.value;
    const filteredEmployees = users.filter(
      (user) => user.name.first.indexOf(input) > -1
    );
    setFiltered(filteredEmployees);
  };

  const handleChangePhone = (event) => {
    const input = event.target.value;
    const filteredEmployees = users.filter(
      (user) => user.phone.indexOf(input) > -1
    );
    setFiltered(filteredEmployees);
  };

  const handleSort = (heading) => {
    if (order === "d") {
      setOrder("a");
    } else {
      setOrder("d");
    }
    const compareFnc = (a, b) => {
      if (order === "a") {
        
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    const sortedUsers = filtered.sort(compareFnc);
    setFiltered(sortedUsers);
  };


  return (
    <div className="App">
      <Header />
      <input
        id="search"
        className="form-control"
        type="search"
        onChange={(event) => handleChange(event)}
        onChange={(event) => handleChangePhone(event)}
      />
      <EmployeeTable users={filtered} handleSort={handleSort} />
    </div>
  );
}
export default App;
