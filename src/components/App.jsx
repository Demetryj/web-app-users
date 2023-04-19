import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const MainPage = lazy(() => import('../pages/Main'));
const UsersPage = lazy(() => import('../pages/Users'));
const PersonPage = lazy(() => import('../pages/Person'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="person" element={<PersonPage />} />
      </Route>
    </Routes>
  );
};
