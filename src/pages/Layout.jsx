import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';  // Import the Navbar component
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (item) => {
    if (favorites.some(fav => fav.uid === item.uid && fav.type === item.type)) {
      setFavorites(favorites.filter(fav => !(fav.uid === item.uid && fav.type === item.type)));
    } else {
      setFavorites([...favorites, item]);
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