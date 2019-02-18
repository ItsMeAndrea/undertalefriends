import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='character' src={require(`./img/${id}.png`)} width='200' height='200' />
      < div >
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
