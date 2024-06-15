import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const translateSegment = (segment, index) => {
    if (index === 0 && segment === 'category') {
      return 'People';
    } else if (index === 0 && segment === 'single') {
      return pathnames[1] === 'people' ? 'People' : pathnames[1] === 'planets' ? 'Planets' : 'Vehicles';
    } else if (!isNaN(segment)) {
      return segment; // For numeric segments like IDs
    } else {
      return segment.charAt(0).toUpperCase() + segment.slice(1);
    }
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li key={to} className="breadcrumb-item active" aria-current="page">
              {translateSegment(value, index)}
            </li>
          ) : (
            <li key={to} className="breadcrumb-item">
              <Link to={to}>{translateSegment(value, index)}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;