import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import DonatePage from './pages/DonatePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ConfirmedRequest from './pages/ConfirmedRequest';
import ConfirmedDonation from './pages/ConfirmedDonation';
import ConfirmedApplication from './pages/ConfirmedApplication';
import ErrorPage from './pages/ErrorPage';
import Spinner from './components/ui/Spinner';
const RequestRescuePage = lazy(() => import('./pages/RequestRescuePage'))
const AdoptPage = lazy(() => import('./pages/AdoptPage'));
const AdoptionFormPage = lazy(() => import('./pages/AdoptionFormPage'));
const PhotoGalleryPage = lazy(() => import('./pages/PhotoGalleryPage'));

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/pethelp" element={<Layout />}>
            <Route index element={<Homepage />}/>
            <Route path="/pethelp/request-rescue" element={
              <Suspense fallback={<Spinner />}>
                <RequestRescuePage />
              </Suspense>}
            />
            <Route path="/pethelp/request-rescue/confirmed" element={<ConfirmedRequest />} />
            <Route path="/pethelp/donate" element={<DonatePage />} />
            <Route path="/pethelp/donate/confirmed" element={<ConfirmedDonation />} />
            <Route path="/pethelp/adopt" element={
              <Suspense fallback={<Spinner />}>
                <AdoptPage />
              </Suspense>}
            />
            <Route path="/pethelp/adopt/:id" element={
              <Suspense fallback={<Spinner />}>
                <AdoptionFormPage />
              </Suspense>}
            />
            <Route path="/pethelp/adopt/confirmed" element={<ConfirmedApplication />} />
            <Route path="/pethelp/about" element={<AboutPage />} />
            <Route path="/pethelp/contact" element={<ContactPage />} />
            <Route path="/pethelp/gallery" element={
              <Suspense fallback={<Spinner />}>
                <PhotoGalleryPage />
              </Suspense>}
            />
            <Route path="*" errorElement={<ErrorPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
