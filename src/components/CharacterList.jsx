import { useEffect, useState } from "react";
import Card from "./Card";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Add this line for debugging
        if (data && data.results) {
          setCharacters(data.results);
        } else {
          console.error("No results field in data:", data);
          setError("No characters found.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("Failed to load characters.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="d-flex overflow-auto">
      {loading ? (
        <p>Loading characters...</p>
      ) : error ? (
        <p>{error}</p>
      ) : characters.length > 0 ? (
        characters.map((character, index) => (
          <Card key={index} character={character.properties} index={index} />
        ))
      ) : (
        <p>No characters found.</p>
      )}
    </div>
  );
};

export default CharacterList;