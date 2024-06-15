import { Link } from 'react-router-dom';

const Card = ({ item, toggleFavorite, isFavorite }) => {
  const handleToggleFavs = () => {
    toggleFavorite(item);
  };

  const handleImageError = (event) => {
    event.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
  };

  return (
    <div className="card px-0 mx-1 mt-2" style={{ flex: '0 0 250px', width: '18rem', backgroundColor: "#2c2f33", color: "#fff" }}>
      {item.type === 'characters' && (
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
          className="card-img-top"
          alt="Character Image"
          onError={handleImageError}
        />
      )}
      {item.type === 'planets' && (
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
          className="card-img-top"
          alt="Planet Image"
          onError={handleImageError}
        />
      )}
      {item.type === 'vehicles' && (
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
          className="card-img-top"
          alt="Vehicle Image"
          onError={handleImageError}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        {item.properties && (
          <p>
            {item.type === 'characters' && (
              <>
                Gender: {item.properties.gender} | Hair Color: {item.properties.hair_color} | Eye Color: {item.properties.eye_color}
              </>
            )}
            {item.type === 'planets' && (
              <>
                Climate: {item.properties.climate} | Population: {item.properties.population}
              </>
            )}
            {item.type === 'vehicles' && (
              <>
                Model: {item.properties.model} | Manufacturer: {item.properties.manufacturer}
              </>
            )}
          </p>
        )}
        <Link to={`/single/${item.uid}`} className="btn btn-primary">Learn more</Link>
        <button className="btn ms-auto" onClick={handleToggleFavs}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
}

export default Card;