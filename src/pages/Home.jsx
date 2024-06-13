import React, { useState } from 'react';
import CharacterList from '../components/CharacterList';
import PlanetList from '../components/PlanetList';
import VehicleList from '../components/VehicleList';
import Card from '../components/Card';

const Home = () => {
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (item) => {
    if (favorites.some(fav => fav.uid === item.uid)) {
      setFavorites(favorites.filter(fav => fav.uid !== item.uid));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <div className="container">
      <section>
        <h2>Characters</h2>
        <CharacterList toggleFavorite={handleToggleFavorite} />
      </section>
      <section>
        <h2>Planets</h2>
        <PlanetList toggleFavorite={handleToggleFavorite} />
      </section>
      <section>
        <h2>Vehicles</h2>
        <VehicleList toggleFavorite={handleToggleFavorite} />
      </section>
      <section>
        <h2>Favorites</h2>
        <div className="d-flex overflow-auto">
          {favorites.length > 0 ? (
            favorites.map((item, index) => (
              <Card key={index} item={item} isFavorite={true} toggleFavorite={handleToggleFavorite} index={index} />
            ))
          ) : (
            <p>No favorites added.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;