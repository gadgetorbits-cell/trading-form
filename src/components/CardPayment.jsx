import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CardPayment.css';
import logo from '../assets/logo.png';
import visaIcon from '../assets/visa.png';
import amexIcon from '../assets/amex.png';
import rupayIcon from '../assets/rupay.png';
import mastercardIcon from '../assets/mastercard.png';
import dinersIcon from '../assets/diners.png';

function CardPayment() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    pin: '' // Added pin field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      const cleaned = value.replace(/\D/g, '');
      const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
      formattedValue = formatted.slice(0, 19); // 16 digits + 3 spaces
    }

    // Format expiry date (MM/YY)
    if (name === 'expiryDate') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length >= 2) {
        formattedValue = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
      } else {
        formattedValue = cleaned;
      }
    }

    // CVV - only numbers, max 3 digits
    if (name === 'cvv') {
      const cleaned = value.replace(/\D/g, '');
      formattedValue = cleaned.slice(0, 3);
    }

    // PIN - only numbers, max 4 digits
    if (name === 'pin') {
      const cleaned = value.replace(/\D/g, '');
      formattedValue = cleaned.slice(0, 4);
    }

    setCardData({ ...cardData, [name]: formattedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate card details
    const cardNumberClean = cardData.cardNumber.replace(/\s/g, '');
    if (cardNumberClean.length < 16) {
      alert('Please enter a valid 16-digit card number.');
      return;
    }
    
    if (cardData.expiryDate.length < 5) {
      alert('Please enter a valid expiry date (MM/YY).');
      return;
    }
    
    if (cardData.cvv.length < 3) {
      alert('Please enter a valid CVV (3 digits).');
      return;
    }

    if (cardData.pin.length < 4) {
      alert('Please enter a valid PIN (4 digits).');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('✅ Payment Successful! Your transaction has been completed.');
      // navigate('/payment-success');
    }, 2000);
  };

  // Card types array - only 5 cards
  const cardTypes = [
    { id: 'visa', name: 'VISA', icon: visaIcon },
    { id: 'mastercard', name: 'Mastercard', icon: mastercardIcon },
    { id: 'amex', name: 'AMERICAN EXPRESS', icon: amexIcon },
    { id: 'rupay', name: 'RuPay', icon: rupayIcon },
    { id: 'diners', name: 'Diners Club', icon: dinersIcon }
  ];

  return (
    <div className="cp-wrapper">
      {/* Main Content */}
      <div className="cp-card">
        <button className="cp-back-btn" onClick={() => navigate(-1)}>
          ← Back to Payment Methods
        </button>

        <h2 className="cp-title">Add Debit / Credit / ATM Card</h2>
        <p className="cp-subtitle">Enter your card details to complete the payment.</p>

        {/* Card Type Icons */}
        <div className="cp-card-types">
          {cardTypes.map((card) => (
            <div className="cp-card-type-item" key={card.id}>
              <img src={card.icon} alt={card.name} />
              <span>{card.name}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Card Number */}
          <div className="cp-form-group">
            <label>Card Number</label>
            <div className="cp-input-wrapper">
              <input
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardData.cardNumber}
                onChange={handleInputChange}
                maxLength="19"
                className="cp-input"
                required
              />
              <span className="cp-card-icon">💳</span>
            </div>
          </div>

          {/* Expiry Date and CVV */}
          <div className="cp-row">
            <div className="cp-form-group">
              <label>Expiry Date (MM/YY)</label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={cardData.expiryDate}
                onChange={handleInputChange}
                maxLength="5"
                className="cp-input"
                required
              />
            </div>
            <div className="cp-form-group">
              <label>CVV</label>
              <div className="cp-input-wrapper">
                <input
                  type="password"
                  name="cvv"
                  placeholder="123"
                  value={cardData.cvv}
                  onChange={handleInputChange}
                  maxLength="3"
                  className="cp-input"
                  required
                />
                <span className="cp-cvv-tooltip" title="3-digit security code"></span>
              </div>
            </div>
          </div>

          {/* PIN Field - New */}
          <div className="cp-form-group">
            <label>ATM PIN</label>
            <div className="cp-input-wrapper">
              <input
                type="password"
                name="pin"
                placeholder="Enter 4-digit PIN"
                value={cardData.pin}
                onChange={handleInputChange}
                maxLength="4"
                className="cp-input"
                required
              />
              <span className="cp-pin-icon">🔐</span>
            </div>
            <div className="cp-pin-hint">
              <span>ℹ️ Enter your 4-digit ATM PIN for verification</span>
            </div>
          </div>

          {/* Payment Button */}
          <button 
            type="submit" 
            className="cp-payment-btn"
            disabled={isProcessing}
          >
            {isProcessing ? 'PROCESSING...' : 'CHECKOUT'}
          </button>
        </form>

        {/* Security Badge */}
        <div className="cp-security">
          <span className="cp-security-icon">🔒</span>
          <span className="cp-security-text">Your payment information is secure.</span>
        </div>
      </div>
    </div>
  );
}

export default CardPayment;