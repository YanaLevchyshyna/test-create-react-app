import { useSelector } from 'react-redux';

import { selectCars } from '../../redux/selectors';
import CarItem from '../CarItem/CarItem';

export default function CarsList() {
  const cars = useSelector(selectCars);

  return (
    <div>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <CarItem car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
}
