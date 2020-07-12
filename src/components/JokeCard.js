import React from 'react';
import loadinggif from '../loading.gif'
const JokeCard = ({loading, jokes, click}) => {
  console.log(loading);
  console.log(typeof jokes);
  
  if (loading) {
    return (
      <div className="card" style={{border : "none"}}>
        <img src={loadinggif} alt="loading"/>
      </div>
    )
  } else {
    return (
      <div>
        <div className='mt-5'>
          <div className='card'>
            <h5 className='card-header'>Joke</h5>
            <div className='card-body'>
              <h4 className='card-text'>{JSON.stringify(jokes)}</h4>
              <br />
              <button onClick={click} className='btn btn-primary'>
                Laugh a little More.
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default JokeCard;

//
//{ jokes.map((item, index) => (<p key={index}>{item}</p>)) }
