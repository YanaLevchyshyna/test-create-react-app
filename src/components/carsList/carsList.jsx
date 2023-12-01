import { useSelector } from 'react-redux';

import { selectCars } from '../../redux/selectors';
import CarItem from '../CarItem/CarItem';
import { Section, CarsListEl, ListItem } from './CarsList.styled';

export default function CarsList() {
  const cars = useSelector(selectCars);

  return (
    <>
      <Section>
        <CarsListEl>
          {cars.map((car) => (
            <ListItem key={car.id}>
              <CarItem car={car} />
            </ListItem>
          ))}
        </CarsListEl>
      </Section>
      <button>Load more</button>
    </>
  );
}
