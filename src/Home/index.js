import { useEffect, useState } from "react";
import Axios from 'axios'
import { Container, FilterContainer, HeaderContainer, Movie, MovieList } from "./styles"


export function Home() {
  
  const [movies, setMovie] = useState([])
  const [filter, setFilter] = useState("year");

  async function getMovies(){
    const response = await Axios.get('https://my-json-server.typicode.com/gabrielacsalesc/movies/movies');
    setMovie(response.data)
  }

  useEffect(() => {
    getMovies();
  },[])

  const handleChange = (event) => {
    setFilter(event.target.value)    
  }

  const filteredMovies = movies
  .sort((a, b) => {
    if (filter === 'year') {
      return a.year.localeCompare(b.year);
    } else if (filter === 'title') {
      return a.title.localeCompare(b.title);
    } else if (filter === 'country') {
      return a.country.localeCompare(b.country);
    }
    return true;
  });


  return (
    <Container>
      <HeaderContainer>
        <svg xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
        >
          <path fill="#DD2B4F" 
            fill-opacity="1" 
            d="M0,256L60,245.3C120,235,240,213,360,186.7C480,160,600,128,720,133.3C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          >
            </path>
        </svg>
      </HeaderContainer>
      
      <h1>Filmes</h1>
      
      <FilterContainer>
        <select name="filme" value={filter} onChange={handleChange} >
          <label>Selecionar por:</label>
          <option value="year">Ano</option>
          <option value="title">Título</option>
          <option value="country">País</option>
        </select>
      </FilterContainer>

      
      <MovieList>
       {filteredMovies.map(movie => {
          return (
            <Movie key={movie.id}>
              <a href="https://www.google.com.br/">
                <img src={movie.poster} alt={movie.title}/>
              </a>
              <span>{movie.title}</span>
              <span>{movie.country}</span>
              <span>{movie.year}</span>
            </Movie>
          )
       })}
      </MovieList>
      
    </Container>
  )
}