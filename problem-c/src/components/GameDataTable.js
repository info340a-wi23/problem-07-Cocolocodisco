import React, { useState } from 'react'; //import React Component
import _ from 'lodash'; //import external library!

export default function GameDataTable(props) {
  const [sortByCriteria, setSortByCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  function handleClick(event) {
    const { name } = event.currentTarget;
    if (name === sortByCriteria) {
      if (sortOrder === "asc") {
        setSortOrder("desc");
      } else {
        setSortOrder(null);
        setSortByCriteria(null);
      }
    } else {
      setSortByCriteria(name);
      setSortOrder("asc");
    }
  }

  let sortedData = [...props.data];
  if (sortByCriteria) {
    sortedData = _.sortBy(props.data, sortByCriteria);
    if (sortOrder === "desc") {
      sortedData = sortedData.reverse();
    }
  }

  //convert data into rows
  const rows = sortedData.map((match) => {
    return <GameDataRow key={match.year} game={match} />;
  });

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              Year
              <SortButton name="year" active={sortByCriteria === "year"} ascending = {sortByCriteria === "year" ? sortOrder === "asc" : null} onClick={handleClick} />
            </th>
            <th className="text-end">
              Winner
              <SortButton name="winner" active={sortByCriteria === "winner"} ascending = {sortByCriteria === "winner" ? sortOrder === "asc" : null} onClick={handleClick} />
            </th>
            <th className="text-center">
              Score
              <SortButton name="score" active={sortByCriteria === "score"} ascending = {sortByCriteria === "score" ? sortOrder === "asc" : null} onClick={handleClick} />
            </th>
            <th>
              Runner-Up
              <SortButton name="runner_up" active={sortByCriteria === "runner_up"} ascending = {sortByCriteria === "runner_up" ? sortOrder === "asc" : null} onClick={handleClick} />
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

//Component for managing display logic of sort button
//Props:
//  `active` [boolean] if icon should be highlighted,
//  `ascending` [boolean] if icon should be in ascending order (flipped)
//  `onClick` [function] click handler (passthrough)

function SortButton(props) {
  let iconClasses = ""
  if (props.active) { iconClasses += ` active` }
  if (props.ascending) { iconClasses += ` flip` };


  return (
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
      <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
    </button>
  );
}

function GameDataRow({ game }) { //game = props.game
  return (
    <tr>
      <td>{game.year}</td>
      <td className="text-end">{game.winner} {game.winner_flag}</td>
      <td className="text-center">{game.score}</td>
      <td>{game.runner_up_flag}&nbsp;&nbsp;{game.runner_up}</td>
    </tr>
  );
}
