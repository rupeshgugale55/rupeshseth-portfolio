import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import BusinessPage from "../pages/BusinessPage";
import SocialWorkPage from "../pages/SocialWorkPage";
import GalleryPage from "../pages/GalleryPage";
import ContactPage from "../pages/ContactPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="business" element={<BusinessPage />} />
          <Route path="social-work" element={<SocialWorkPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
