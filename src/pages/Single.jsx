import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Single = props => {
    const { theId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${theId}`)
            .then((response) => response.json())
            .then((data) => setItem(data.result.properties))
            .catch((error) => console.error(error));
    }, [theId]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container text-center">
            <h1 className="display-4">Name: {item.name}</h1>
            <hr className="my-4" />
            <ul>
                <li>Gender: {item.gender}</li>
                <li>Height: {item.height}</li>
                <li>Mass: {item.mass}</li>
                <li>Hair Color: {item.hair_color}</li>
                <li>Skin Color: {item.skin_color}</li>
                <li>Eye Color: {item.eye_color}</li>
                <li>Birth Year: {item.birth_year}</li>
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
