import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs'; // Import the Breadcrumbs component
import useGlobalReducer from '../hooks/useGlobalReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  const { store, dispatch } = useGlobalReducer();
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
      <Breadcrumbs /> {/* Add Breadcrumbs component here */}
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