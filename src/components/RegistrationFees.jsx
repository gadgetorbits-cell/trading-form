import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RegistrationFees.css';
import logo from '../assets/logo.png';

// Import payment method images
import visaIcon from '../assets/visa.png';
import rupayIcon from '../assets/rupay.png';
import netbankingIcon from '../assets/netbanking.png';
import upiIcon from '../assets/upi.png';

function RegistrationFees() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const formData = location.state?.formData || {};
  
  const applicantName = formData.firstName && formData.lastName 
    ? `${formData.firstName} ${formData.lastName}` 
    : 'Rahul Sharma';

  const programName = formData.program || 'Finance Classes';

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/payment-modes');
    }, 1500);
  };

  return (
    <div className="rf-wrapper">
      <div className="rf-header">
        <div className="rf-header-content">
          <div className="rf-logo-section">
            <div className="rf-logo-placeholder">
              <img src={logo} alt="Trade School Logo" />
            </div>
            <div className="rf-brand">
              <h1>TRADE SCHOOL</h1>
              <p>LEARN. TRADE. GROW.</p>
            </div>
          </div>
          <div className="rf-contact">
            <span>📧tradeschool@gmail.com </span>
            <span>📞 222 555 7777</span>
          </div>
        </div>
      </div>

      <div className="rf-card">
        <h2 className="rf-title">Pay Registration Fees</h2>
        <p className="rf-subtitle">Complete your registration by paying the required fees.</p>

        <div className="rf-section">
          <h3 className="rf-section-title">Registration Summary</h3>
          <div className="rf-summary-grid">
            <div className="rf-summary-item">
              <span className="rf-summary-label">Program</span>
              <span className="rf-summary-value">{programName}</span>
            </div>
            <div className="rf-summary-item">
              <span className="rf-summary-label">Applicant Name</span>
              <span className="rf-summary-value">{applicantName}</span>
            </div>
            <div className="rf-summary-item">
              <span className="rf-summary-label">Registration Fees</span>
              <span className="rf-summary-value">₹1</span>
            </div>
            <div className="rf-summary-item">
              <span className="rf-summary-label">Amount to Pay</span>
              <span className="rf-summary-value rf-amount">₹1</span>
            </div>
          </div>
        </div>

        <div className="rf-section">
          <h3 className="rf-section-title">Important Information</h3>
          <ul className="rf-info-list">
            <li><span className="rf-bullet">•</span> Your registration will be confirmed after successful payment.</li>
            <li><span className="rf-bullet">•</span> This is a one-time, non-refundable registration fee.</li>
            <li><span className="rf-bullet">•</span> You will receive a confirmation email and receipt after payment.</li>
            <li><span className="rf-bullet">•</span> For any payment issues, contact our support team.</li>
          </ul>
        </div>

        <div className="rf-section rf-payment-section">
          <h3 className="rf-section-title">Payment Amount</h3>
          <div className="rf-amount-display">
            <span className="rf-currency">₹</span>
            <span className="rf-amount-number">1</span>
            <span className="rf-amount-text">One Rupee Only</span>
          </div>
        </div>

        <button 
          className="rf-payment-btn" 
          onClick={handlePayment}
          disabled={isProcessing}
        >
          {isProcessing ? 'PROCESSING...' : 'PROCEED TO PAYMENT GATEWAY'}
        </button>

        <div className="rf-payment-methods">
          <p className="rf-methods-label">We Accept</p>
          <div className="rf-methods-icons">
            <div className="rf-method-item">
              <img src={visaIcon} alt="VISA" className="rf-payment-icon" />
              <span className="rf-method-name">VISA</span>
            </div>
            
            <div className="rf-method-item">
              <img src={rupayIcon} alt="RuPay" className="rf-payment-icon" />
              <span className="rf-method-name">RuPay</span>
            </div>
            
            <div className="rf-method-item">
              <img src={netbankingIcon} alt="Net Banking" className="rf-payment-icon" />
              <span className="rf-method-name">NET BANKING</span>
            </div>

            <div className="rf-method-item">
              <img src={upiIcon} alt="UPI" className="rf-payment-icon" />
              <span className="rf-method-name">UPI</span>
            </div>
          </div>
        </div>

        <div className="rf-security">
          <span className="rf-security-icon">🔒</span>
          <span className="rf-security-text">100% Secure Payment</span>
          <span className="rf-security-desc">Your payment details are safe and encrypted.</span>
        </div>

        <div className="rf-support">
          <span className="rf-support-icon">❓</span>
          <span className="rf-support-text">Need Help? Contact Support</span>
        </div>
      </div>
    </div>
  );
}

export default RegistrationFees;