import { useState, useEffect } from 'react';
import Card from './components/Card';
import Search from './components/search.svg';


const api = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${api}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);

  }

  useEffect(() => {
    searchMovies(searchInput);
  }, [searchInput]);

  return (
    <div className="App">
      <div className='app'>
        <h1>MovieLand</h1>

        <div className='search'>
          <input
            placeholder='Search Movies'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <img
            src={Search}
            alt="Search Icon"
            onClick={() => searchMovies(searchInput)}
          />
        </div>

        {
          movies?.length > 0 && (
            <div className='container'>
              {
                movies.map((movie) => {
                  return <Card movie={movie} />
                })
              }
            </div>
          )
        }


      </div>
    </div>
  );
}

export default App;
