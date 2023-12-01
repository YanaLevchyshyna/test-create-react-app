import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          <Link to={'/favorite_cars'}>Favorite cars</Link>
        </nav>
      </Header>

      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
