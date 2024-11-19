import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './ToDoItem.tsx'
import TicTacToe from './TicTacToe.tsx'
import ImageGallery from './ImageGallery.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TicTacToe />
    <App />
    <ImageGallery />
  </StrictMode>,
)
