import { useState } from "react";
import { Link } from 'react-router-dom';

const Card = ({ character, index }) => {
    const [isClicked, setIsClicked] = useState(false);

    console.log("Character prop:", character); // Log character prop

    const handleToggleFavs = (name) => {
        setIsClicked(!isClicked);
        // handle toggle favorite logic here
    }

    return (
        <div className="card px-0 mx-1 mt-2" style={{ flex: '0 0 250px', width: '18rem' }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="card-img-top" alt="Character Image" />
            <div className="card-body">
                {character ? (
                    <div>
                        <h5 className="card-title">{character.name}</h5>
                        <p>
                            Gender: {character.gender} | Hair Color: {character.hair_color} | Eye Color: {character.eye_color}
                        </p>
                    </div>
                ) : (
                    <p>Character details not available</p>
                )}
                <Link to={`/single/${index + 1}`} className="btn btn-primary">Learn more</Link>
                <button className="btn ms-auto" onClick={() => handleToggleFavs(character.name)}>
                    {isClicked ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    );
}

export default Card;