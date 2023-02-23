import React from 'react';
import {TableHeader} from './TableHeader';
import {SenatorRow} from './SenatorRow';

//Modify the `SenatorTable` component so that it maps the provided `EXAMPLE_SENATORS` array to an array of `<SenatorRow>` objects (remember to pass each one its `senatorData` prop!), and then includes this array in the returned `<table>` (below the `<TableHeader>`). This should cause your table to now show two Senators and their information.

// - You must also put the array of `<SenatorRow>` elements inside of a `<tbody>` element (inside of the `<table>`) to produce a valid DOM tree.

// - Remember to give each `<SenatorRow>` object a `key` attribute (e.g., of the Senator's id or name) so that React can keep track of them.


export function SenatorTable(props) {
  const { senatorsList } = props;
  const senatorRows = senatorsList.map((senator) => (
    <SenatorRow key={senator.id} senatorData={senator} />
  ));

  return (
    <table className="table table-bordered">
      <TableHeader columnNames={['Name', 'Party', 'Phone', 'Twitter']} />
      <tbody>{senatorRows}</tbody>
    </table>
  );
}

export default SenatorTable;