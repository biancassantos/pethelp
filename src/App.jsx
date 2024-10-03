import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import RequestRescuePage from './pages/RequestRescuePage';
import DonatePage from './pages/DonatePage';
import AdoptPage from './pages/AdoptPage';
import AdoptionFormPage from './pages/AdoptionFormPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ConfirmedRequest from './pages/ConfirmedRequest';
import ConfirmedDonation from './pages/ConfirmedDonation';
import ConfirmedApplication from './pages/ConfirmedApplication';
import PhotoGalleryPage from './pages/PhotoGalleryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pethelp" element={<Layout />} >
          <Route index element={<Homepage />}/>
          <Route path="/pethelp/request-rescue" element={<RequestRescuePage />} />
          <Route path="/pethelp/request-rescue/confirmed" element={<ConfirmedRequest />} />
          <Route path="/pethelp/donate" element={<DonatePage />} />
          <Route path="/pethelp/donate/confirmed" element={<ConfirmedDonation />} />
          <Route path="/pethelp/adopt" element={<AdoptPage />} />
          <Route path="/pethelp/adopt/:id" element={<AdoptionFormPage />} />
          <Route path="/pethelp/adopt/confirmed" element={<ConfirmedApplication />} />
          <Route path="/pethelp/about" element={<AboutPage />} />
          <Route path="/pethelp/contact" element={<ContactPage />} />
          <Route path="/pethelp/gallery" element={<PhotoGalleryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
