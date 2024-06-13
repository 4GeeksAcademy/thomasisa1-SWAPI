import { useState } from "react";
import { Link } from 'react-router-dom';

const Card = ({ item, index, isFavorite, toggleFavorite }) => {
    const { name, gender, hair_color, eye_color, rotation_period, orbital_period, diameter, model, cost_in_credits, manufacturer } = item.properties;
    const [isClicked, setIsClicked] = useState(isFavorite);

    const handleToggleFavs = () => {
        setIsClicked(!isClicked);
        toggleFavorite(item);
    };

    const handleImageError = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    };

    return (
        <div className="card px-0 mx-1 mt-2" style={{ flex: '0 0 250px', width: '18rem' }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/${item.type}/${item.uid}.jpg`}
                className="card-img-top"
                alt={`${item.type} Image`}
                onError={handleImageError}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {gender && <p>Gender: {gender} | Hair Color: {hair_color} | Eye Color: {eye_color}</p>}
                {rotation_period && <p>Rotation Period: {rotation_period} | Orbital Period: {orbital_period} | Diameter: {diameter}</p>}
                {model && <p>Model: {model} | Cost: {cost_in_credits} | Manufacturer: {manufacturer}</p>}
                <Link to={`/single/${item.uid}`} className="btn btn-primary">Learn more</Link>
                <button className="btn ms-auto" onClick={handleToggleFavs}>
                    {isClicked ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    );
};

export default Card;