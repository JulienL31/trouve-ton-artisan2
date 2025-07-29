import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Artisans from "./pages/Artisans";
import ArtisanDetails from "./pages/ArtisanDetails";
import Legal from "./pages/LegalPage";
import About from "./pages/AboutPage";
import NotFound from "./pages/NotFoundPage";
import Layout from "./layout/Layout";
import EnConstruction from './pages/EnConstruction';
import ScrollToTop from './components/ScrollToTop';
import DashboardAdmin from './pages/DashboardAdmin';

const App = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/artisans/:id" element={<ArtisanDetails />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mentions-legales" element={<EnConstruction title="Mentions légales" />} />
        <Route path="/donnees-personnelles" element={<EnConstruction title="Données personnelles" />} />
        <Route path="/accessibilite" element={<EnConstruction title="Accessibilité" />} />
        <Route path="/cookies" element={<EnConstruction title="Cookies" />} />
         <Route path="/admin" element={<DashboardAdmin />} />
      </Routes>
    </Layout>
  );
};


export default App;
