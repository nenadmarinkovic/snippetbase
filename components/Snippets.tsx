import React from "react";

function Snippets({ posts }: any) {
  return (
    <div className="table-container" role="table" aria-label="Destinations">
      <div className="flex-table header" role="rowgroup">
        <div className="flex-row first" role="columnheader">
          Date
        </div>
        <div className="flex-row" role="columnheader">
          Name
        </div>
        <div className="flex-row" role="columnheader">
          Description
        </div>
        <div className="flex-row" role="columnheader">
          Programming language
        </div>
      </div>

      <div className="flex-table row" role="rowgroup">
        <div className="flex-row first" role="cell">
          15.05.2023
        </div>
        <div className="flex-row" role="cell">
        Some random function
        </div>
        <div className="flex-row" role="cell">
          Let’s try to change the previous flexbox table to CSS grid layout!
        </div>
        <div className="flex-row" role="cell">
          JavaScript
        </div>
      </div>
    </div>
  );
}

export default Snippets;
