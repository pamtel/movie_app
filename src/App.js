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
  return (
    <div className="app">
      <div className="header">
        <p className="logo">MyTestApp</p>
      </div>
      <div className="hero">
        <h5 className="hero-text">Watch something incredible.</h5>
      </div>
      <Search />
      {/* {result &&
        result.map((data, index) => <Movies key={index} data={data} />)} */}
      <div className="container">
        <h2>Movie header</h2>
        <div className="wrapper">
          <Movies result={result} />
          <Movies result={result} />
          <Movies result={result} />
          <Movies result={result} />
          <Movies result={result} />
        </div>
      </div>
      <div className="container">
        <h2>Movie header</h2>
        <div className="wrapper">
          <Movies result={result} />
          <Movies result={result} />
          <Movies result={result} />
          <Movies result={result} />
          <Movies result={result} />
        </div>
      </div>
    </div>
  );
};

export default App;
