import React from "react";
import { Table } from "reactstrap";

export default function TableData() {
  return (
    <div>
      <Table hover>
        <thead>
          <tr className="table-dark">
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-success">
            <th scope="row">1</th>
            <td>Nimesh</td>
            <td>Devaliya</td>
            <td>@nimu</td>
          </tr>
          <tr className="table-info">
            <th scope="row">2</th>
            <td>Khushal</td>
            <td>vaghela</td>
            <td>@Khush</td>
          </tr>
          <tr className="table-danger">
            <th scope="row">3</th>
            <td>Latesh</td>
            <td>Patil</td>
            <td>@Lattu</td>
          </tr>
          <tr className="table-primary">
            <th scope="row">4</th>
            <td>Nayan</td>
            <td>Dangar</td>
            <td>@nayan</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
