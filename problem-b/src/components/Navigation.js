import React from 'react';

function AboutNav() {
  return (
    <nav id="aboutLinks">
      <h2>About</h2>
      <ul className="list-unstyled">
        <li>
          <a href="#/">How to Adopt</a>
        </li>
        <li>
          <a href="#/">Volunteering</a>
        </li>
        <li>
          <a href="#/">Events</a>
        </li>
        <li>
          <a href="#/">Donate</a>
        </li>
        <li>
          <a href="#/">About Us</a>
        </li>
      </ul>
    </nav>
  );
}

function BreedNav(props) {
  return (
    <nav id="breedLinks">
    <h2>Pick a Breed</h2>
    <ul class="list-unstyled">
      {props.breeds.map((breed) => (
          <li key={breed}><a href={`#/${breed}`}>{breed}</a></li>
      ))}
    </ul>            
  </nav>
  );
}

export { AboutNav, BreedNav };

