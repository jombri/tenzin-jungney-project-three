import './App.css';
import { useState } from 'react';
import Header from './Header.js';
import Baller from './Baller.js';
import Form from './Form.js';
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

      const response = await fetch(url);
      const apiData = await response.json();

      const playersResult = apiData.data;
      if (playersResult.length === 0) {
        setFormError(true)
      } else {
        setPlayer(playersResult);
        setFormError(false);
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // if ballerInput is true, run fetchPlayer, else throw error
    if (ballerInput) {
      fetchPlayer(ballerInput);
    } else {
      <p>Error: enter a player</p>
    }
    setBallerInput('');

  }

  const handleChange = (e) => {
    setBallerInput(e.target.value)
  }


  return (
    <div className='wrapper'>
      <Header />
      
      <Form 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        ballerInput={ballerInput}
        formError={formError}
      />

      <Baller baller={player} />
      <Footer />


    </div>
  );
}

export default App;
