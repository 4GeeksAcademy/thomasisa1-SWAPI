import { useEffect, useState } from "react";
import Card from "./Card";

const VehicleList = ({ toggleFavorite }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then(async (data) => {
        if (data && data.results) {
          const fetchDetailsPromises = data.results.map(vehicle =>
            fetch(vehicle.url)
              .then(response => response.json())
              .then(detailData => ({
                uid: vehicle.uid,
                name: vehicle.name,
                properties: detailData.result.properties,
                type: 'vehicles'
              }))
          );
          const detailedVehicles = await Promise.all(fetchDetailsPromises);
          setVehicles(detailedVehicles);
        } else {
          setError("No vehicles found.");
        }
        setLoading(false);
      })
      .catch(error => {
        setError("Failed to load vehicles.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="d-flex overflow-auto">
      {loading ? (
        <p>Loading vehicles...</p>
      ) : error ? (
        <p>{error}</p>
      ) : vehicles.length > 0 ? (
        vehicles.map((vehicle, index) => (
          <Card key={index} item={vehicle} isFavorite={false} toggleFavorite={toggleFavorite} />
        ))
      ) : (
        <p>No vehicles found.</p>
      )}
    </div>
  );
};

export default VehicleList;