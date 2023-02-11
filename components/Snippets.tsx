import React from "react";
import { Table } from "../styles/components/snippets";

function Snippets() {
  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Description</th>
            <th>Programming language</th>
          </tr>
          <tr>
            <td>03.05.2023</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>JavaScript</td>
          </tr>
          <tr>
            <td>03.05.2023</td>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>JavaScript</td>
          </tr>
          <tr>
            <td>03.05.2023</td>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Go</td>
          </tr>
          <tr>
            <td>03.05.2023</td>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>Go</td>
          </tr>
          <tr>
            <td>03.05.2023</td>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>PHP</td>
          </tr>
          <tr>
            <td>03.05.2023</td>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>JavaScript</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Snippets;
