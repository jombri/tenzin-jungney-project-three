import './App.css';
// import axios from 'axios';
import { useState } from 'react';
import Baller from './Baller.js';
import Form from './Form.js';
// import Table from './Table.js';
import Footer from './Footer.js';

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
      const playersResult = apiData.data;
      setPlayer(playersResult);
      setFormError(false);

    } catch(error) {
      // if error occurs
      setFormError(true);
    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // if ballerInput is empty, throw an error, else call fetchPlayer 
    if (ballerInput) {
      fetchPlayer();
    } else {
      <p>enter a player</p>
    }
    setBallerInput('');

  }

  const handleChange = (e) => {
    setBallerInput(e.target.value)
  }

  // const colNames = ['Id', 'First Name', 'Last Name', 'Position', 'Team']


  return (
    <div className='wrapper'>
      <header className='headerStyle'> Look up your NBA Baller info. </header>
      
      <Form 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        ballerInput={ballerInput}
        formError={formError}
      />

      <Baller baller={player} />
      {/* <Table baller={player} /> */}
      <Footer />

    </div>
  );
}

export default App;
