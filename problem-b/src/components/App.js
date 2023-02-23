import React from 'react';
import { useState } from 'react';
import { AboutNav, BreedNav } from './Navigation.js';
import  PetList  from './PetList'


function App(props) {
  const [pets, setPets] = useState(props.pets);

  const adopt = (petName) => {
    setPets(pets.map((pet) => {
      if (pet.name === petName) {
        return { ...pet, adopted: true };
      } else {
        return pet;
      }
    }));
  };

  function breedArray(array) {
    let newBreedArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!newBreedArray.includes(array[i].breed)) {
        newBreedArray.push(array[i].breed);
      }
    }
    return newBreedArray;
  }

  return (
    <div>
      <header className="jumbotron jumbotron-fluid py-4">
        <div className="container">
          <h1>Adopt a Pet</h1>
        </div>
      </header>

      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
            <AboutNav />
            <BreedNav breeds={breedArray(pets)} />
          </div>
          <div id="petList" className="col-9">
            <PetList pets={pets} adoptCallback={adopt} />
          </div>
        </div>
      </main>
      <footer className="container">
        <small>
          Images from{" "}
          <a href="http://www.seattlehumane.org/adoption/dogs">
            Seattle Humane Society
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App; // export the App component as default