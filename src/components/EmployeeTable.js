import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import Table from "react-bootstrap/Table";

function EmployeeTable({ users }) {
  console.log(typeof users);
  console.log(users);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => (
              // <tr key={user.email}>
              //   <td>Picture Here</td>
              //   <td>Mark</td>
              //   <td>Otto</td>
              //   <td>555-666-7777</td>
              //   <td>MO@gmail.com</td>
              // </tr>
              <TableRow key={user.email} />
            ))}

          {/* {users && users.forEach((user) => <TableRow />)} */}
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeeTable;
