import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Movies from './components/Movies';
import Search from './components/Search';
import axios from 'axios';

const App = () => {
  const [result, setResult] = useState([]);
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=f901df58`;
  const FetchMovies = useCallback(() => {
    axios.get(url).then((response) => {
      setResult(response?.data);
    });
  }, [url]);
  useEffect(() => {
    FetchMovies();
  }, [FetchMovies]);
  console.log('result', result);
  return (
    <div>
      <div className="header">
        <p className="logo">MyTestApp</p>
      </div>
      <div className="hero">
        <h5 className="hero-text">Watch something incredible.</h5>
      </div>
      <Search />
      {/* {result &&
        result.map((data, index) => <Movies key={index} data={data} />)} */}
      <Movies result={result} />
    </div>
  );
};

export default App;
