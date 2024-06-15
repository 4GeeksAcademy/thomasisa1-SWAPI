import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const Navbar = ({ favorites, toggleFavorite }) => {
  const handleRemoveFavorite = (item) => {
    toggleFavorite(item);
  };

  const location = useLocation();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars API</span>
        </Link>
        <Breadcrumbs location={location} />
        <div className="ml-auto d-flex">
          <div className="dropdown me-3">
            <button className="btn btn-primary dropdown-toggle" type="button" id="favoritesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites {favorites.length > 0 ? `(${favorites.length})` : ''}
            </button>
            <ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
              {favorites.length > 0 ? (
                favorites.map((fav, index) => (
                  <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                    {fav.name}
                    <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFavorite(fav)}>Remove</button>
                  </li>
                ))
              ) : (
                <li className="dropdown-item">No favorites added.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;