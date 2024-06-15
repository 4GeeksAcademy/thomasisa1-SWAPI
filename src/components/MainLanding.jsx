import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainLanding = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Star Wars Universe</h1>
      <div className="row">
        <div className="col-12 col-md-4">
          <Link to="/category/people">
            <div className="card mb-4">
              <img src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg" className="card-img-top" alt="Characters" />
              <div className="card-body">
                <h5 className="card-title">Characters</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-md-4">
          <Link to="/category/planets">
            <div className="card mb-4">
              <img src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg" className="card-img-top" alt="Planets" />
              <div className="card-body">
                <h5 className="card-title">Planets</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-md-4">
          <Link to="/category/vehicles">
            <div className="card mb-4">
              <img src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg" className="card-img-top" alt="Vehicles" />
              <div className="card-body">
                <h5 className="card-title">Vehicles</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainLanding;