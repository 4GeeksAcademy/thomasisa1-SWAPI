import { Link } from 'react-router-dom';

const Card = ({ item, index, toggleFavorite, isFavorite }) => {
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
          src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
          className="card-img-top"
          alt="Character Image"
          onError={handleImageError}
        />
      )}
      {item.type === 'planets' && (
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
          className="card-img-top"
          alt="Planet Image"
          onError={handleImageError}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        {item.properties && (
          <p>
            {item.type === 'characters' ? (
              <>
                Gender: {item.properties.gender} | Hair Color: {item.properties.hair_color} | Eye Color: {item.properties.eye_color}
              </>
            ) : (
              <>
                Climate: {item.properties.climate} | Population: {item.properties.population}
              </>
            )}
          </p>
        )}
        <Link to={`/single/${index + 1}`} className="btn btn-primary">Learn more</Link>
        <button className="btn ms-auto" onClick={handleToggleFavs}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
}

export default Card;