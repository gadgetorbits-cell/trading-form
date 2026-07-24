import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmissionForm from './components/AdmissionForm';
import RegistrationFees from './components/RegistrationFees';
import PaymentModes from './components/PaymentModes';
import UPIPinEntry from './components/UPIPinEntry';
import CardPayment from './components/CardPayment';
import NetBanking from './components/NetBanking';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AdmissionForm />} />
          <Route path="/payment" element={<RegistrationFees />} />
          <Route path="/payment-modes" element={<PaymentModes />} />
          <Route path="/upi-pin" element={<UPIPinEntry />} />
          <Route path="/card-payment" element={<CardPayment />} />
          <Route path="/netbanking" element={<NetBanking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;