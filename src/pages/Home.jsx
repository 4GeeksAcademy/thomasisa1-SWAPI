import React from 'react';
import CharacterList from '../components/CharacterList';
import PlanetList from '../components/PlanetList';
import VehicleList from '../components/VehicleList';

const Home = () => {
    return (
        <div>
            <section>
                <h2>Characters</h2>
                <CharacterList />
            </section>
            <section>
                <h2>Planets</h2>
                <PlanetList />
            </section>
            <section>
                <h2>Vehicles</h2>
                <VehicleList />
            </section>
        </div>
    );
};

export default Home;