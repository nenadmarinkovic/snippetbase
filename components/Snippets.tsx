import React from "react";
import { Table } from "../styles/components/snippets";

function Snippets({ posts }: any) {
  console.log(posts);

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
          {posts.map((post: any, index: any) => (
            <tr key={index}>
              <td>{post.data.date}</td>
              <td>{post.data.title}</td>
              <td>{post.data.description}</td>
              <td>{post.data.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Snippets;
