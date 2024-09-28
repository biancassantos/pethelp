import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import RequestRescuePage from './pages/RequestRescuePage';
import DonatePage from './pages/DonatePage';
import AdoptPage from './pages/AdoptPage';
import AdoptionFormPage from './pages/AdoptionFormPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pethelp" element={<Layout />}>
          <Route index element={<Homepage />}/>
          <Route path="/pethelp/request-rescue" element={<RequestRescuePage />} />
          <Route path="/pethelp/donate" element={<DonatePage />} />
          <Route path="/pethelp/adopt" element={<AdoptPage />} />
          <Route path="/pethelp/adopt/:id" element={<AdoptionFormPage />} />
          <Route path="/pethelp/about" element={<AboutPage />} />
          <Route path="/pethelp/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
