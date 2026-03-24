import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { PrivacyPolicy, TermsConditions, ReturnPolicy, ShippingPolicy, RefundPolicy } from './pages/PolicyPages';
import ResetPassword from './pages/ResetPassword';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/return" element={<ReturnPolicy />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
