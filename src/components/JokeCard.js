import React from 'react';

function JokeCard(props) {
 
  console.log(props)
  
  if(props.loading) {
    return <h4>Loading....</h4>
  }


  return (
    <div className='mt-5'>
      <div className='card'>
        <h5 className='card-header'>Joke</h5>
        <div className='card-body'>
          <h4 className='card-text'>
            {props.jokes}
          </h4>
          <br />
          <a href='/' className='btn btn-primary'>
            Laugh a little More.
          </a>
        </div>
      </div>
    </div>
  );
}

export default JokeCard;
