import React from 'react';

interface MovieListProps {
  movies: string[];
  removeMovie: (movie: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, removeMovie }) => {
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index} style={{ marginBottom: '5px' }}>
          {movie}
          <button
            onClick={() => removeMovie(movie)}
            style={{
              marginLeft: '10px',
              padding: '2px 5px',
              background: '#963e3e',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;