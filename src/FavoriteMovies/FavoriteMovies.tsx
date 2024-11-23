import React, { useState, useEffect } from 'react';
import MovieInput from './MovieInput.tsx';
import MovieList from './MovieList.tsx';

const FavoriteMovies: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  const addMovie = (movie: string) => {
    if (movie.trim() && !favorites.includes(movie.trim())) {
      setFavorites([...favorites, movie.trim()]);
    }
  };

  const removeMovie = (movieToRemove: string) => {
    setFavorites(favorites.filter((item) => item !== movieToRemove));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Favorite movies</h2>
      <MovieInput addMovie={addMovie} />
      <MovieList movies={favorites} removeMovie={removeMovie} />
    </div>
  );
};

export default FavoriteMovies;
