import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmissionForm from './components/AdmissionForm';
import RegistrationFees from './components/RegistrationFees';
import PaymentModes from './components/PaymentModes';
import UPIPinEntry from './components/UPIPinEntry';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;