import { useEffect, useState } from "react";
import Card from "./Card";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then((response) => response.json())
      .then((data) => setVehicles(data.result || []))  // Ensure data.result is an array
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="d-flex overflow-auto">
      {vehicles.length > 0 ? (
        vehicles.map((vehicle, index) => (
          <Card key={index} vehicle={vehicle.properties} index={index} />
        ))
      ) : (
        <p>Loading vehicles...</p>
      )}
    </div>
  );
};

export default VehicleList;