import React, { useState } from 'react';


interface MovieInputProps {
  addMovie: (movie: string) => void;
}

const MovieInput: React.FC<MovieInputProps> = ({ addMovie }) => {
  const [movie, setMovie] = useState<string>('');

  const handleAddMovie = () => {
    addMovie(movie);
    setMovie('');
    localStorage.setItem("key", "value");
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Enter the movie title"
        style={{ padding: '5px', width: '70%' }}
      />
      <button onClick={handleAddMovie} style={{ padding: '5px 10px', marginLeft: '10px' }}>
        Add
      </button>
    </div>
  );
};

export default MovieInput;
