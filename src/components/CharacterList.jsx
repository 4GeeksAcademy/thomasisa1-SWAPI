import { useEffect, useState } from "react";
import Card from "./Card";

const CharacterList = ({ toggleFavorite, favorites }) => {
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
      .then(async (data) => {
        if (data && data.results) {
          const fetchDetailsPromises = data.results.map((character) =>
            fetch(character.url)
              .then(response => response.json())
              .then(detailData => ({
                uid: character.uid,
                name: character.name,
                properties: detailData.result.properties,
                type: 'characters'
              }))
          );
          const detailedCharacters = await Promise.all(fetchDetailsPromises);
          setCharacters(detailedCharacters);
        } else {
          setError("No characters found.");
        }
        setLoading(false);
      })
      .catch((error) => {
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
          <Card 
            key={index} 
            item={character} 
            isFavorite={favorites.some(fav => fav.uid === character.uid)} 
            toggleFavorite={toggleFavorite} 
            index={index} 
          />
        ))
      ) : (
        <p>No characters found.</p>
      )}
    </div>
  );
};

export default CharacterList;