//import Loader from 'components/Loader';
import Loader from 'components/Loader/Loader';
import {
  Container,
  Header,
  Link,
} from 'components/SharedLayout/SharedLayout.styled';
import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer />
      </main>
    </Container>
  );
};

export default SharedLayout;
