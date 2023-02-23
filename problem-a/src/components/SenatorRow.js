import React from 'react'; //import React library

//example senator data objects:
// { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
// { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }

/* Your code goes here */

export function SenatorRow(props) {
  const senator = props.senatorData;
  const twitterUrl = `https://twitter.com/${senator.twitter}`;

  return (
    <tr>
      <td>{senator.name}</td>
      <td>{`${senator.party.charAt(0)} - ${senator.state}`}</td>
      <td><a href={`tel:${senator.phone}`}>{senator.phone}</a></td>
      <td><a href={twitterUrl}>@{senator.twitter}</a></td>
    </tr>
  );
}

export default SenatorRow;

