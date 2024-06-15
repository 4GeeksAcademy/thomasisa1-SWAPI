import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Single = props => {
    const { type, theId } = useParams();  // Destructure 'type' and 'theId' from useParams
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let endpoint = '';
        switch (type) {
            case 'people':
                endpoint = `https://www.swapi.tech/api/people/${theId}`;
                break;
            case 'planets':
                endpoint = `https://www.swapi.tech/api/planets/${theId}`;
                break;
            case 'vehicles':
                endpoint = `https://www.swapi.tech/api/vehicles/${theId}`;
                break;
            default:
                setError("Invalid path");
                return;
        }

        fetch(endpoint)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.result && data.result.properties) {
                    setItem(data.result.properties);
                } else {
                    setError("Item not found");
                }
            })
            .catch((error) => {
                console.error(error);
                setError("Failed to load item");
            });
    }, [type, theId]);

    if (error) {
        return <div className="container text-center"><p>{error}</p></div>;
    }

    if (!item) {
        return <div className="container text-center">Loading...</div>;
    }

    const getImageUrl = () => {
        switch (type) {
            case 'people':
                return `https://starwars-visualguide.com/assets/img/characters/${theId}.jpg`;
            case 'planets':
                return `https://starwars-visualguide.com/assets/img/planets/${theId}.jpg`;
            case 'vehicles':
                return `https://starwars-visualguide.com/assets/img/vehicles/${theId}.jpg`;
            default:
                return "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
        }
    };

    return (
        <div className="container text-center">
            <h1 className="display-4">Name: {item.name}</h1>
            <img 
                src={getImageUrl()} 
                alt={`${item.name} Image`} 
                className="img-fluid" 
                style={{ maxHeight: '400px' }} 
                onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"} 
            />
            <hr className="my-4" />
            <ul>
                {type === 'people' && (
                    <>
                        <li>Gender: {item.gender}</li>
                        <li>Height: {item.height}</li>
                        <li>Mass: {item.mass}</li>
                        <li>Hair Color: {item.hair_color}</li>
                        <li>Skin Color: {item.skin_color}</li>
                        <li>Eye Color: {item.eye_color}</li>
                        <li>Birth Year: {item.birth_year}</li>
                    </>
                )}
                {type === 'planets' && (
                    <>
                        <li>Climate: {item.climate}</li>
                        <li>Diameter: {item.diameter}</li>
                        <li>Gravity: {item.gravity}</li>
                        <li>Orbital Period: {item.orbital_period}</li>
                        <li>Population: {item.population}</li>
                        <li>Rotation Period: {item.rotation_period}</li>
                        <li>Surface Water: {item.surface_water}</li>
                        <li>Terrain: {item.terrain}</li>
                    </>
                )}
                {type === 'vehicles' && (
                    <>
                        <li>Model: {item.model}</li>
                        <li>Manufacturer: {item.manufacturer}</li>
                        <li>Cost in Credits: {item.cost_in_credits}</li>
                        <li>Length: {item.length}</li>
                        <li>Max Atmosphering Speed: {item.max_atmosphering_speed}</li>
                        <li>Crew: {item.crew}</li>
                        <li>Passengers: {item.passengers}</li>
                        <li>Cargo Capacity: {item.cargo_capacity}</li>
                    </>
                )}
            </ul>
            <Link to="/">
                <span className="btn btn-primary btn-lg" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

Single.propTypes = {
    match: PropTypes.object
};

export default Single;