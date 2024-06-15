import React, { useState } from 'react';
import CharacterList from '../components/CharacterList';
import PlanetList from '../components/PlanetList';
import VehicleList from '../components/VehicleList';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (item) => {
    if (favorites.some(fav => fav.uid === item.uid && fav.type === item.type)) {
      setFavorites(favorites.filter(fav => !(fav.uid === item.uid && fav.type === item.type)));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const handleRemoveFavorite = (uid, type) => {
    setFavorites(favorites.filter(fav => !(fav.uid === uid && fav.type === type)));
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
            aria-expanded="false">
            Favorites {favorites.length > 0 ? `(${favorites.length})` : ''}
          </button>
          <ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
            {favorites.length > 0 ? (
              favorites.map((fav, index) => (
                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  {fav.name}
                  <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFavorite(fav.uid, fav.type)}>Remove</button>
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
      <h1>Star Wars Vehicles</h1>
      <section>
        <VehicleList toggleFavorite={handleToggleFavorite} favorites={favorites} />
      </section>
    </div>
  );
};

export default Home;