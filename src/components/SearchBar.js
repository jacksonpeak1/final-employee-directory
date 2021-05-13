import React from "react";
import EmployeeTable from "./EmployeeTable";

function SearchBar({users}) {
  return <div>Hello I am the search bar!<EmployeeTable users={users} /></div>;
}

export default SearchBar;
