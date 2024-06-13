import { useState } from "react";
import { Link } from 'react-router-dom';

const Card = ({ character, planet, vehicle, index }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleToggleFavs = (name) => {
        setIsClicked(!isClicked);
        // handle toggle favorite logic here
    }

    return (
        <div className="card px-0 mx-1 mt-2" style={{ flex: '0 0 250px', width: '18rem' }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="card-img-top" alt="Character Image" />
            <div className="card-body">
                {character && (
                    <div>
                        <h5 className="card-title">{character.name}</h5>
                        <p>
                            Gender: {character.gender} | Hair Color: {character.hair_color} | Eye Color: {character.eye_color}
                        </p>
                    </div>
                )}
                {planet && (
                    <div>
                        <h5 className="card-title">{planet.name}</h5>
                        <p>
                            Rotation Period: {planet.rotation_period} | Orbital Period: {planet.orbital_period} | Diameter: {planet.diameter}
                        </p>
                    </div>
                )}
                {vehicle && (
                    <div>
                        <h5 className="card-title">{vehicle.name}</h5>
                        <p>
                            Model: {vehicle.model} | Cost: {vehicle.cost_in_credits} | Manufacturer: {vehicle.manufacturer}
                        </p>
                    </div>
                )}
                {character && <Link to={`/single/${index + 1}`} className="btn btn-primary">Learn more</Link>}
                {planet && <Link to={`/single/${index + 1}`} className="btn btn-primary">Learn more</Link>}
                {vehicle && <Link to={`/single/${index + 1}`} className="btn btn-primary">Learn more</Link>}
                <button className="btn ms-auto" onClick={() => handleToggleFavs(character?.name || planet?.name || vehicle?.name)}>
                    {isClicked ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    );
}

export default Card;