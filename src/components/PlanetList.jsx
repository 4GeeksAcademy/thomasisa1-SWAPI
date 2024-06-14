import { useEffect, useState } from "react";
import Card from "./Card";

const PlanetList = ({ toggleFavorite, favorites }) => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(async (data) => {
        if (data && data.results) {
          const fetchDetailsPromises = data.results.map((planet) =>
            fetch(planet.url)
              .then(response => response.json())
              .then(detailData => ({
                uid: planet.uid,
                name: planet.name,
                properties: detailData.result.properties,
                type: 'planets'
              }))
          );
          const detailedPlanets = await Promise.all(fetchDetailsPromises);
          setPlanets(detailedPlanets);
        } else {
          setError("No planets found.");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load planets.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="d-flex overflow-auto">
      {loading ? (
        <p>Loading planets...</p>
      ) : error ? (
        <p>{error}</p>
      ) : planets.length > 0 ? (
        planets.map((planet, index) => (
          <Card 
            key={index} 
            item={planet} 
            isFavorite={favorites.some(fav => fav.uid === planet.uid)} 
            toggleFavorite={toggleFavorite} 
            index={index} 
          />
        ))
      ) : (
        <p>No planets found.</p>
      )}
    </div>
  );
};

export default PlanetList;