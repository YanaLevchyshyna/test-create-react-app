import PropTypes from 'prop-types';

import defaultCar from '../DefaultImage/defaultCar1.jpeg';

import {
  FirstItemWrapper,
  Span,
  FirstList,
  SecondList,
  Button,
} from './CarItem.styled';

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
    <>
      <img src={img || defaultCar} alt={make} />
      <FirstItemWrapper>
        <p>
          {make} <Span>{model},</Span> {year}
        </p>
        <p>{rentalPrice}</p>
      </FirstItemWrapper>
      <FirstList>
        <li>{city}</li>
        <li>{country}</li>
        <li>{rentalCompany}</li>
      </FirstList>
      <SecondList>
        <li>{type}</li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{functionalities[0]}</li>
      </SecondList>
      <Button>Learn more</Button>
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
