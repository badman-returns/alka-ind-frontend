import { Routes, Route } from 'react-router';
import AdminOutlet from '../pages/admin/outlet';
import RootPublicPage from '../pages/public';
import LoginPage from '../pages/public/LoginPage/LoginPage';
import DashboardPage from '../pages/admin/DashboardPage/Dashboard';
import { AuthProvider } from '../utils/useAuth';
import BaseCarouselPage from '../pages/admin/CaraouselPage/BaseCarouselPage';
import LatesProductPage from '../pages/admin/LatestProductPage/LatesProductPage';
import ProductPage from '../pages/admin/ProductPage/ProductPage';
import EnquiryPage from '../pages/admin/EnquiryPage/EnquiryPage';
import PartnerPage from '../pages/admin/PartnerPage/PartnerPage';
import BaseAboutPage from '../pages/admin/AboutPage/BaseAboutPage';
import BaseOrganisationPage from '../pages/admin/OrganisationPage/BaseOrganisationPage';
import React from 'react';

export default function Router() {
    return (
        <React.Fragment>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<RootPublicPage />} />
                    <Route path='admin' element={<AdminOutlet />}>
                        <Route path='login' element={<LoginPage />} />
                        <Route path='dashboard' element={<DashboardPage />}>
                            <Route path='about' element={<BaseAboutPage />} />
                            <Route path='organisation' element={<BaseOrganisationPage />} />
                            <Route path='caraousel' element={<BaseCarouselPage />} />
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