import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const Navbar = ({ favorites, toggleFavorite }) => {
  const handleRemoveFavorite = (item) => {
    toggleFavorite(item);
  };

  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <div className="d-flex justify-content-between w-100">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">Star Wars API</span>
          </Link>
          <Breadcrumbs />
          <div className="dropdown">
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