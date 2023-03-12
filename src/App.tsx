import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainLayout = lazy(() => import('./layouts/MainLayout'));
const AlertPage = lazy(() => import('./pages/AlertPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/alerts" element={<AlertPage />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}
