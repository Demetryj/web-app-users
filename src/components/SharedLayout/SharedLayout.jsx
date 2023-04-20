import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';
import { Container } from './SharedLayout.styled';
import { Footer } from '../Footer';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};
