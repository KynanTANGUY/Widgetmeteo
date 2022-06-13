import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Meteo from './components/Meteo';
import Search from './components/Search';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [dataApi, setDataApi] = useState([]);
  const [searchDone, setSearchDone] = useState(false);

  const search = async (value) => {
    const fetch = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    setDataApi(fetch.data);
    console.log(fetch.data, 'fetch.data');
    setSearchDone(true);
  };

  const handleChangeValue = (e) => setInputValue(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    search(inputValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Search
          inputValue={inputValue}
          handleChangeValue={handleChangeValue}
          onFormSubmit={onFormSubmit}
        />
        {searchDone && (
        <Meteo items={dataApi} />)}

      </header>
    </div>
  );
}

export default App;
