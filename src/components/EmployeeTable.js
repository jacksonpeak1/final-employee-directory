import React from "react";
import TableRow from "./TableRow";
import Table from "react-bootstrap/Table";

function EmployeeTable({ users, handleSort }) {
  console.log(typeof users);
  console.log(users);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={() => handleSort("name")}>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => <TableRow key={user.login.uuid} user={user} />)}

          {/* {users && users.forEach((user) => <TableRow />)} */}
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeeTable;
