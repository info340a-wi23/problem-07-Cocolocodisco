import React, { useState } from 'react'; //import React Component
import GameDataTable from './GameDataTable';
import TeamSelectForm from './TeamSelectForm';

function App(props) {

  const [filterTeamName, setFilterTeamName] = useState('');
  const [includeRunnersUp, setIncludeRunnersUp] = useState(false);

  const applyFilter = (teamName, includeRunnersUp) => {
    setFilterTeamName(teamName);
    setIncludeRunnersUp(includeRunnersUp);
  }

  let displayedData;
  if (filterTeamName === '') {
    displayedData = props.gameData;
  } else {
    displayedData = props.gameData.filter(game => {
  if (game.winner === filterTeamName) {
    return true;
  }
  if (includeRunnersUp && game.runner_up === filterTeamName) {
    return true;
  }
  return false;
});
  }

  //get sorted list of unique teamNames. reduce array of objects into array of strings, 
  //convert to Set to get uniques, spread back into array, and sort 
  const uniqueTeamNames = [...new Set(props.gameData.reduce((all, current) => {
    return all.concat([current.winner, current.runner_up]);
  }, []))].sort();

  return (
    <div className="container">
      <header className="mb-3">
        <h1>FIFA World Cup Finals</h1>
      </header>
    
      <main>
        <TeamSelectForm teamOptions={uniqueTeamNames} applyFilterCallback={applyFilter} />
        <GameDataTable data={props.gameData} />
      </main>

      <footer>
        <small>Data from <a href="https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals">Wikipedia</a>.</small>
      </footer>
    </div>
  );
}

export default App;
