import React from 'react';

function PetCard(props) {
  const handleClick = () => {
    props.adoptCallback(props.petData.name);
  };

  const { name, img, sex, breed, adopted } = props.petData;

  return (
    <div className="card" onClick={handleClick}>
      <img className="card-img-top" src={img} alt={name} />
      <div className="card-body">
        <h3 className="card-title">
          {name + (adopted ? " (Adopted)" : "")}
        </h3>
        <p className="card-text">
          {sex} {breed}
        </p>
      </div>
    </div>
  );
}

export default function PetList(props) {
    const petCardArray = props.pets.map((pet) => {
        return <PetCard petData={pet} adoptCallback={props.adoptCallback} key={pet.name}/>
    })
    return(
      <>
        <h2>Dogs for Adoption</h2>
        <div className='card-deck'>
            {petCardArray}
        </div>
      </>
    )
}


