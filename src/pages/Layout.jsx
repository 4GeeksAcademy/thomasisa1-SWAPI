import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';  // Import the Navbar component
import useGlobalReducer from '../hooks/useGlobalReducer';  // Import the global state hook
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  const { store, dispatch } = useGlobalReducer();  // Use global state hook
  const favorites = store.favorites;

  const toggleFavorite = (item) => {
    if (favorites.some(fav => fav.uid === item.uid && fav.type === item.type)) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: item });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: item });
    }
  };

  return (
    <div>
      <Navbar favorites={favorites} toggleFavorite={toggleFavorite} />
      <main className="container my-4">
        <Outlet context={{ favorites, toggleFavorite }} />
      </main>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">Star Wars API Application</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;