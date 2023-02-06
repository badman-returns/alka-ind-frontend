import { Routes, Route } from "react-router";
import AdminOutlet from "../pages/admin/outlet";
import LoginPage from "../pages/public/LoginPage/LoginPage";
import DashboardPage from "../pages/admin/DashboardPage/Dashboard";
import { AuthProvider } from "../utils/useAuth";
import BaseCarouselPage from "../pages/admin/CaraouselPage/BaseCarouselPage";
import LatesProductPage from "../pages/admin/LatestProductPage/LatesProductPage";
import ProductPage from "../pages/admin/ProductPage/ProductPage";
import EnquiryPage from "../pages/admin/EnquiryPage/EnquiryPage";
import BasePartnerPage from "../pages/admin/PartnerPage/BasePartnerPage";
import BaseAboutPage from "../pages/admin/AboutPage/BaseAboutPage";
import BaseOrganisationPage from "../pages/admin/OrganisationPage/BaseOrganisationPage";
import React from "react";
import BasePage from "../pages/public/BasePage/BasePage";
import About from "../components/About/About";
import Product from "../components/Product/Product";
import Enquiry from "../components/Enquiry/Enquiry";
import Contact from "../components/Contact/Contact";
import BaseCategoryPage from "../pages/admin/CategoryPage/BaseCategoryPage";

export default function Router() {
  return (
    <React.Fragment>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route path="about" element={<About />} />
            <Route path="products" element={<Product />} />
            <Route path="enquiry" element={<Enquiry />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="admin" element={<AdminOutlet />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="dashboard" element={<DashboardPage />}>
              <Route path="about" element={<BaseAboutPage />} />
              <Route path="organisation" element={<BaseOrganisationPage />} />
              <Route path="caraousel" element={<BaseCarouselPage />} />
              <Route path="partners" element={<BasePartnerPage />} />
              <Route path="category" element={<BaseCategoryPage />} />
              <Route path="latest-products" element={<LatesProductPage />} />
              <Route path="products" element={<ProductPage />} />
              <Route path="enquiry" element={<EnquiryPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </React.Fragment>
  );
}
