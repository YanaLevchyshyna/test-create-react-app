import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function CarItem({ car }) {
  const location = useLocation();
  const { id, make, img } = car;
  return (
    <>
      <Link to={`/cars/${id}`} state={{ from: location }}>
        <div>
          <img src={img} alt={car.make} />
          <p>{make}</p>
        </div>
      </Link>
    </>
  );
}

CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};
