import React from "react";

function TableRow({user}) {
  return (
    <tr>
      <td><img src={user.picture.thumbnail} alt="profile pic"/></td>
      <td>{user.name.first}</td>
      <td>{user.name.last}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
    </tr>
  );
}

export default TableRow;
