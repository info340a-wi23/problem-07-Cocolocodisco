import React from "react";

export function TableHeader(props) {
  const columns = props.columnNames.map((name) => (
    <th key={name}>{name}</th>
  ));

  return (
    <thead>
      <tr>{columns}</tr>
    </thead>
  );
}

export default TableHeader;