import React, {useState, useEffect} from 'react';
import axios from 'axios';
//import dotenv from 'dotenv';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import JokeCard from './components/JokeCard';

function App() {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    getJoke();
  }, []);
  
  const API_KEY = process.env.REACT_APP_API_KEY
  
  const getJoke = async () => {
    setLoading(true);
    const res = await axios({
      method: 'GET',
      url: 'https://joke3.p.rapidapi.com/v1/joke',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'joke3.p.rapidapi.com',
        'x-rapidapi-key': API_KEY,
        useQueryString: true,
      },
    });
    const data = await res.data.content;
    setJoke(data);
    setLoading(false);
  };

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <JokeCard key={joke} jokes={joke} loading={loading} click={getJoke}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
