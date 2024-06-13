import { useEffect, useState } from "react";
import Card from "./Card";

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((response) => response.json())
      .then((data) => setPlanets(data.result || []))  // Ensure data.result is an array
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="d-flex overflow-auto">
      {planets.length > 0 ? (
        planets.map((planet, index) => (
          <Card key={index} planet={planet.properties} index={index} />
        ))
      ) : (
        <p>Loading planets...</p>
      )}
    </div>
  );
};

export default PlanetList;