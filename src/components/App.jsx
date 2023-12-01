import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { getCars } from '../redux/operations';

const Home = lazy(() => import('../pages/Home/Home'));
const Cars = lazy(() => import('../pages/Cars/Cars'));
const FavoriteCar = lazy(() => import('../pages/FavoriteCar/FavoriteCar'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/favorite_cars" element={<FavoriteCar />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
}
