import React, { useState } from 'react';
import CharacterList from '../components/CharacterList';
import PlanetList from '../components/PlanetList';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [favorites, setFavorites] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleToggleFavorite = (item) => {
    if (favorites.some(fav => fav.uid === item.uid)) {
      setFavorites(favorites.filter(fav => fav.uid !== item.uid));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const handleRemoveFavorite = (uid) => {
    setFavorites(favorites.filter(fav => fav.uid !== uid));
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="container" style={{ position: "relative", minHeight: "100vh" }}>
      <div className="favorites-container">
        <div className="dropdown">
          <button 
            className="btn btn-primary dropdown-toggle" 
            type="button" 
            id="favoritesDropdown" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
            onClick={toggleDropdown}>
            Favorites {favorites.length > 0 ? `(${favorites.length})` : ''}
          </button>
          <ul className={`dropdown-menu ${dropdownVisible ? 'show' : ''}`} aria-labelledby="favoritesDropdown">
            {favorites.length > 0 ? (
              favorites.map((fav, index) => (
                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  {fav.name}
                  <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFavorite(fav.uid)}>Remove</button>
                </li>
              ))
            ) : (
              <li className="dropdown-item">No favorites added.</li>
            )}
          </ul>
        </div>
      </div>
      <h1>Star Wars Characters</h1>
      <section>
        <CharacterList toggleFavorite={handleToggleFavorite} favorites={favorites} />
      </section>
      <h1>Star Wars Planets</h1>
      <section>
        <PlanetList toggleFavorite={handleToggleFavorite} favorites={favorites} />
      </section>
    </div>
  );
};

export default Home;