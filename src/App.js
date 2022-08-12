import './App.css';
// import axios from 'axios';
import { useState } from 'react';
import Baller from './Baller.js';
import Form from './Form.js';

function App() {
  const [player, setPlayer] = useState(''); 
  const [ballerInput, setBallerInput] = useState('');
  const [formError, setFormError] = useState(false);

  const fetchPlayer = async () => {
    const url = new URL('https://www.balldontlie.io/api/v1/players');
    url.search = new URLSearchParams({
      search: ballerInput,
      per_page: 100
    });

    try {

      const response = await fetch(url);
      const apiData = await response.json();

      console.log(apiData.data);
      setPlayer(apiData.data);
      // console.log(apiData.data.data.last_name);
      setFormError(false);

    } catch(error) {
      // what to do if there is an error...
      setFormError(true);

    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPlayer();
  }

  const handleChange = (e) => {
    setBallerInput(e.target.value)
  }


  return (
    <div className="App">
      <header> ballers </header>
      
      <Form 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        ballerInput={ballerInput}
        formError={formError}
      />

      <Baller baller={player} />

    </div>
  );
}

export default App;
