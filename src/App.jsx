import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import PageTransitionLoader from './components/layout/PageTransitionLoader';
import SEOHead from './components/layout/SEOHead';
import HomePage from './pages/HomePage';
import BrandsPage from './pages/BrandsPage';
import BrandDetailPage from './pages/BrandDetailPage';
import ProductDetailPage from './pages/ProductDetailPage';
import HistoryPage from './pages/HistoryPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTransitionLoader />
      <SEOHead />
      <div className="page-fade-in min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marques" element={<BrandsPage />} />
          <Route path="/marques/:slug" element={<BrandDetailPage />} />
          <Route path="/parfums/:slug" element={<ProductDetailPage />} />
          <Route path="/notre-histoire" element={<HistoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
