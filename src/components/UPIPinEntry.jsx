import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./UPIPinEntry.css";

import upiLogo from "../assets/upi.png";
import paymentIcon from "../assets/payment-icon.png";

const UPIPinEntry = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pin, setPin] = useState("");

  const selectedBank =
    location.state?.selectedBank || "Union Bank of India";

  // Allow max 6 digits (standard UPI PIN length)
  const handleNumber = (num) => {
    if (pin.length < 6) {
      setPin((prev) => prev + num);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

const handlePay = () => {
    if (pin.length === 0) return;
    alert("✅ Payment Successful! Your transaction has been completed.");
  };

  const keypad = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "delete",
    "0",
    "pay",
  ];

  return (
    <div className="upi-container">
      {/* Header */}
      <div className="header">
        <div className="logo-section">
          <img
            src={upiLogo}
            alt="UPI"
            className="upi-logo"
          />
          <div className="bank-name">
            {selectedBank}
          </div>
        </div>
      </div>

      {/* Payment Card */}
      <div className="payment-card">
        <div className="payment-details">
          <h2>
            Pay <span>₹1.00</span>
          </h2>
        </div>
        <div className="payment-icon">
          <img
            src={paymentIcon}
            alt="Payment"
            className="payment-icon-img"
          />
        </div>
      </div>

      {/* PIN */}
      <div className="pin-section">
        <h2>Enter your PIN</h2>
        <div className="pin-dots">
          {pin.length === 0 ? (
            <div className="pin-placeholder">
              Enter your UPI PIN
            </div>
          ) : (
            [...pin].map((_, index) => (
              <div key={index} className="dot filled"></div>
            ))
          )}
        </div>
      </div>

      {/* Warning */}
      <div className="warning">
        <span className="warning-icon">!</span>
        <span>Never enter your UPI PIN to receive money</span>
      </div>

      {/* Keypad */}
      <div className="keypad">
        {keypad.map((item, index) => {
          if (item === "delete") {
            return (
              <button
                key={index}
                className="key delete-key"
                onClick={handleDelete}
              >
                ⌫
              </button>
            );
          }

          if (item === "pay") {
            return (
              <button
                key={index}
                className={`key pay-key ${
                  pin.length > 0 ? "pay-key-active" : ""
                }`}
                disabled={pin.length === 0}
                onClick={handlePay}
              >
                Pay
              </button>
            );
          }

          return (
            <button
              key={index}
              className="key"
              onClick={() => handleNumber(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default UPIPinEntry;