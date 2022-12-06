import { Routes, Route } from 'react-router';
import AdminOutlet from '../pages/admin/outlet';
import RootPublicPage from '../pages/public';
import LoginPage from '../pages/public/LoginPage/LoginPage';
import DashboardPage from '../pages/admin/DashboardPage/Dashboard';
import { AuthProvider } from '../utils/useAuth';
import CaraouselPage from '../pages/admin/CaraouselPage/CaraouselPage';
import LatesProductPage from '../pages/admin/LatestProductPage/LatesProductPage';
import ProductPage from '../pages/admin/ProductPage/ProductPage';
import EnquiryPage from '../pages/admin/EnquiryPage/EnquiryPage';
import PartnerPage from '../pages/admin/PartnerPage/PartnerPage';
import AboutPageWrapper from '../pages/admin/AboutPage/AboutPageWrapper';
import OrganisationPageWrapper from '../pages/admin/OrganisationPage/OrganisationPageWrapper';
import React from 'react';

export default function Router() {
    return (
        <React.Fragment>
            <AuthProvider>
                <Routes>
                    <Route path='*' element={<RootPublicPage />} />
                    <Route path='admin' element={<AdminOutlet />}>
                        <Route path='login' element={<LoginPage />} />
                        <Route path='dashboard' element={<DashboardPage />}>
                            <Route path='about' element={<AboutPageWrapper />} />
                            <Route path='organisation' element={<OrganisationPageWrapper />} />
                            <Route path='caraousel' element={<CaraouselPage />} />
                            <Route path='partners' element={<PartnerPage />} />
                            <Route path='latest-products' element={<LatesProductPage />} />
                            <Route path='products' element={<ProductPage />} />
                            <Route path='enquiry' element={<EnquiryPage />} />

                        </Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </React.Fragment>
    )
}