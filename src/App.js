import React, {useState, useEffect} from 'react';
import axios from "axios"

import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import JokeCard from './components/JokeCard';

function App() {

  const [joke, setJoke] = useState({})
  const [loading, setLoading] = useState(false)
  
  useEffect( () => {
    getJoke()
  },[])
  
  const getJoke = async () => {
    setLoading(true)
    const res = await axios({
      "method":"GET",
      "url":"https://joke3.p.rapidapi.com/v1/joke",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"joke3.p.rapidapi.com",
      "x-rapidapi-key":"92d97e9523msh9cc8496555f9bf3p103c47jsnb825f36c5c04",
      "useQueryString":true
      }
      })
      
    const data = res.data.content
    //console.log(data)
    setJoke(data)
    setLoading(false)
  }  

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <JokeCard jokes={joke} loading={loading}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;





