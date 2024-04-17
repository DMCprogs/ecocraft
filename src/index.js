import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './page-css/sidenav.css';
import './sass-files/home-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-image-crop/dist/ReactCrop.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages

import MainPage from './pages/MainPage';
import Home from './pages/Home';
import PersonalData from './pages/PersonalData';
import StoreNoAuth from './pages/user-store-settings/StoreNoAuth';
import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import Mooo from './pages/AdminLogin';
import ProductDetail from './pages/ProductDetail';
import AdminDashboard from './pages/AdminDashboard';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import StoreFront from './pages/seller-store-settings/StoreFront';
import PaymentAndDelivery from './pages/seller-store-settings/PaymentAndDelivery';

import VendorProfile from './pages/seller-store-settings/VendorProfile';
import VendorProfileUser from './pages/user-store-settings/VendorProfileUser';

import MapBiding from './pages/MapBinding';
import AddNewProduct from './pages/AddNewProduct';
import ModalSendEmail from './components/ModalSendEmail';
import PurchasesActive from './pages/seller-store-settings/PurchasesActive';
import Sales from './pages/seller-store-settings/Sales';
import PaymentDelivery from './pages/user-store-settings/PaymentDelivery';

//components
// import AdminForm from "./pages/AdminForm";
import { ToastContainer } from 'react-toastify';
import AppContext, { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import Reviews from './pages/user-store-settings/Reviews';
import Page_404 from './pages/404';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import ReviewForm from './components/ReviewForm';
import Modal from './components/Modal';
import EcoModal from './components/Modal';
import PassModal from './components/ModalPassChange';
import MailModal from './components/ModalAddressChange';
import SellerSettings from './pages/seller-store-settings/SellerSettings';
import AboutUs from './pages/AboutUs';
import Terms from './privacy/Terms';
import Privacy from './privacy/Privacy';

import Modalstore from './components/ModalRegStore';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <ToastContainer position="top-left" autoClose={2000} />
    <React.StrictMode>
      <AppProvider>
        <AuthProvider>
          <BrowserRouter>
            {/* Same as */}
            <Modalstore></Modalstore>
            <ModalSendEmail />
            <EcoModal></EcoModal>
            <PassModal></PassModal>
            <MailModal></MailModal>

            <div id="overlay-nav"></div>
            <NavBar />

            <Catalog />
            <Routes>
              <Route index element={<MainPage />} />
              <Route path="home" element={<Home />} />
              <Route path="personaldata" element={<PersonalData />} />
              <Route path="payment-and-delivery" element={<PaymentDelivery />} />
              <Route path="storenoauth" element={<StoreNoAuth />} />
              <Route path="addnewproduct" element={<AddNewProduct />} />
              <Route path="purchasesactive" element={<PurchasesActive />} />
              <Route path="sales" element={<Sales />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="paymentanddelivery" element={<PaymentAndDelivery />} />

              <Route path="vendorprofile" element={<VendorProfile />} />
              <Route path="vendorprofileuser" element={<VendorProfileUser />} />

              <Route path="storenoauth" element={<StoreNoAuth />} />
              <Route path="terms" element={<Terms />} />
              <Route path="privacy" element={<Privacy />} />

              <Route path="admin-dashboard" element={<AdminDashboard />} />
              <Route path="store/:id" element={<StoreFront />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="cart" element={<Cart />} />
              <Route path="sellersettings" element={<SellerSettings />} />
              {/*<Route*/}
              {/*  path="admin-dashboard/admin-form"*/}
              {/*  element={<AdminForm />}*/}
              {/*/>*/}
              <Route path="registration" element={<Registration />} />
              <Route path="map-binding" element={<MapBiding />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="admin-portal" element={<Mooo />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="*" element={<Page_404 />} />
              {/* <Route path="reviewform" element={<ReviewForm />} /> */}
            </Routes>

            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </AppProvider>
    </React.StrictMode>
  </>,
);
