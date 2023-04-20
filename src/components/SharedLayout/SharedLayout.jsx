import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AppBar } from '../AppBar';
import { Container, Main } from './SharedLayout.styled';
import { Footer } from '../Footer';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Main>
      </Container>
      <Footer />
      <Toaster />
    </>
  );
};
