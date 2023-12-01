import PropTypes from 'prop-types';

export default function CarItem({ car }) {
  const {
    id,
    make,
    model,
    year,
    rentalPrice,
    img,
    type,
    country,
    city,
    rentalCompany,
    functionalities,
  } = car;
  return (
    <div>
      <img src={img} alt={car.make} />
      <div>
        <p>
          {make} <span>{model},</span> {year}
        </p>
        <p>{rentalPrice}</p>
      </div>

      <ul>
        <li>{city}</li>
        <li>{country}</li>
        <li>{rentalCompany}</li>
      </ul>
      <ul>
        <li>{type}</li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{functionalities[0]}</li>
      </ul>
      <button>Learn More</button>
    </div>
  );
}

CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};
