import React from "react";
import { Table } from "react-bootstrap";

const Opening = () => {
  return (
    <div>
      <h1 className="text-center">Opening Hours</h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Day </th>
            <th>Time</th>
            <th>People in Charge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Monday</td>
            <td>3pm to 4pm</td>
            <td>Rahim</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tuesday</td>
            <td>6pm to 8pm</td>
            <td>Bashir</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Wednesday</td>
            <td>4pm to 8pm</td>
            <td>Mamun</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Thursday</td>
            <td>6pm to 8pm</td>
            <td>Bashira</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Tuesday</td>
            <td>6am to 8pm</td>
            <td>Bashir</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Opening;
