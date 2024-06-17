import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import useGlobalReducer from '../hooks/useGlobalReducer';

const Home = () => {
  const { type } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { store, dispatch } = useGlobalReducer();
  const favorites = store?.favorites ?? [];  // Ensure favorites is always an array

  const toggleFavorite = (item) => {
    console.log('Toggling favorite for item:', item); // Log the item being toggled
    const isFavorite = favorites.some(fav => fav.uid === item.uid && fav.type === item.type);
    dispatch({ type: isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE', payload: item });
  };

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}`)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then(async data => {
        if (data && data.results) {
          const fetchDetailsPromises = data.results.map(item =>
            fetch(item.url)
              .then(response => response.json())
              .then(detailData => ({
                uid: item.uid,
                name: item.name,
                properties: detailData.result.properties,
                type: type
              }))
          );
          const detailedItems = await Promise.all(fetchDetailsPromises);
          setItems(detailedItems);
        } else {
          setError("No items found.");
        }
        setLoading(false);
      })
      .catch(error => {
        setError("Failed to load items.");
        setLoading(false);
      });
  }, [type]);

  return (
    <div className="container">
      <h1 className="text-center my-4">{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
      {loading ? (
        <p>Loading {type}...</p>
      ) : error ? (
        <p>{error}</p>
      ) : items.length > 0 ? (
        <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card
              key={index}
              item={item}
              toggleFavorite={toggleFavorite}
              isFavorite={favorites.some(fav => fav.uid === item.uid && fav.type === item.type)}
            />
          ))}
        </div>
      ) : (
        <p>No {type} found.</p>
      )}
    </div>
  );
};

export default Home;