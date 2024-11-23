import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './ToDoItem.tsx';
import ImageGallery from './ImageGallery.tsx';
import FavoriteMovies from './FavoriteMovies/FavoriteMovies.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <App />
      <ImageGallery />
      <div style={{ marginTop: '20px' }}>
        <FavoriteMovies />
      </div>
    </div>
  </StrictMode>
);
