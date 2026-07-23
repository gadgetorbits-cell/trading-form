import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdmissionForm.css';
import logo from '../assets/logo.png';

function AdmissionForm() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    program: '',
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    experience: '',
    declaration1: false,
    declaration2: false
  });

  const [touched, setTouched] = useState({
    program: false,
    firstName: false,
    lastName: false,
    dob: false,
    gender: false,
    email: false,
    phone: false,
    experience: false,
    declaration1: false,
    declaration2: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form submitted:', formData);
      alert('✅ Application submitted successfully!');
      navigate('/payment', { state: { formData: formData } });
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData({
      program: '',
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      email: '',
      phone: '',
      experience: '',
      declaration1: false,
      declaration2: false
    });
    setTouched({
      program: false,
      firstName: false,
      lastName: false,
      dob: false,
      gender: false,
      email: false,
      phone: false,
      experience: false,
      declaration1: false,
      declaration2: false
    });
  };

  const isFormValid = () => {
    return (
      formData.program !== '' &&
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.dob !== '' &&
      formData.gender !== '' &&
      formData.email !== '' &&
      formData.phone !== '' &&
      formData.experience !== '' &&
      formData.declaration1 === true &&
      formData.declaration2 === true
    );
  };

  return (
    <div className="tsf-wrapper">
      {/* Desktop Header */}
      <div className="tsf-desktop-header">
        <div className="tsf-header-content">
          <div className="tsf-logo-section">
            <div className="tsf-logo-placeholder">
              <img src={logo} alt="Trade School Logo" />
            </div>
            <div className="tsf-brand">
              <h1>TRADE SCHOOL</h1>
              <p>LEARN. TRADE. GROW.</p>
            </div>
          </div>
          <div className="tsf-contact">
            <span>📧 tradeschool@gmail.com </span>
            <span>📞 222 555 7777</span>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="tsf-mobile-header">
        <div className="tsf-mobile-brand">
          <div className="tsf-mobile-logo">
            <img src={logo} alt="Trade School Logo" />
          </div>
          <h1>TRADE SCHOOL</h1>
          <p>LEARN. TRADE. GROW.</p>
        </div>
        <div className="tsf-mobile-contact">
          <span>📧 yourinfo@emailaddress.com</span>
          <span>🌐 www.template.net</span>
          <span>📞 222 555 7777</span>
        </div>
      </div>

      <div className="tsf-card">
        <h2 className="tsf-form-title">Trade School Admission Form</h2>
        <p className="tsf-form-subtitle">
          Please fill out this form completely to apply for admission to our trade school. 
          <span className="tsf-required-star"> *</span> indicates required fields.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* PROGRAMS SECTION */}
          <div className="tsf-section">
            <h3 className="tsf-section-title">
              PROGRAMS (TRADING CLASSES) <span className="tsf-required-star">*</span>
            </h3>
            <p className="tsf-section-sub">Select the program you are interested in:</p>
            <div className="tsf-program-grid">
              {[
                { id: 'prog1', value: 'Stock Market Basics', label: 'Stock Market Basics', desc: 'Learn the fundamentals of stock market and investing.' },
                { id: 'prog2', value: 'Technical Analysis', label: 'Technical Analysis', desc: 'Master chart reading, patterns and indicators for better trades.' },
                { id: 'prog3', value: 'Options Trading', label: 'Options Trading', desc: 'Learn options strategies to manage risk and maximize returns.' },
                { id: 'prog4', value: 'Futures Trading', label: 'Futures Trading', desc: 'Understand futures contracts and hedge like a pro.' },
                { id: 'prog5', value: 'Intraday Trading', label: 'Intraday Trading', desc: 'Strategies and techniques for intraday success.' },
                { id: 'prog6', value: 'Advanced Strategies', label: 'Advanced Strategies', desc: 'Advanced concepts and algorithms for smart trading.' }
              ].map(program => (
                <div className="tsf-program-item" key={program.id}>
                  <input
                    type="radio"
                    name="program"
                    id={program.id}
                    value={program.value}
                    checked={formData.program === program.value}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                  />
                  <label htmlFor={program.id}>
                    <strong>{program.label}</strong>
                    <span>{program.desc}</span>
                  </label>
                </div>
              ))}
            </div>
            {touched.program && !formData.program && (
              <div className="tsf-error-message">Please select a program</div>
            )}
          </div>

          {/* PERSONAL INFORMATION */}
          <div className="tsf-section">
            <h3 className="tsf-section-title">
              PERSONAL INFORMATION <span className="tsf-required-star">*</span>
            </h3>
            
            <div className="tsf-form-group">
              <label>Full Name <span className="tsf-required-star">*</span></label>
              <div className="tsf-name-row">
                <div className="tsf-input-wrapper">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={touched.firstName && !formData.firstName ? 'tsf-input-error' : ''}
                    required
                  />
                  {touched.firstName && !formData.firstName && (
                    <div className="tsf-error-message">First name is required</div>
                  )}
                </div>
                <div className="tsf-input-wrapper">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={touched.lastName && !formData.lastName ? 'tsf-input-error' : ''}
                    required
                  />
                  {touched.lastName && !formData.lastName && (
                    <div className="tsf-error-message">Last name is required</div>
                  )}
                </div>
              </div>
            </div>

            <div className="tsf-form-group">
              <label>Date of Birth <span className="tsf-required-star">*</span></label>
              <div className="tsf-input-wrapper">
                <input
                  type="text"
                  name="dob"
                  placeholder="MM-DD-YYYY"
                  value={formData.dob}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={touched.dob && !formData.dob ? 'tsf-input-error' : ''}
                  required
                />
                {touched.dob && !formData.dob && (
                  <div className="tsf-error-message">Date of birth is required</div>
                )}
              </div>
            </div>

            <div className="tsf-form-group">
              <label>Gender <span className="tsf-required-star">*</span></label>
              <div className="tsf-gender-group-horizontal">
                {['Male', 'Female', 'Other', 'Prefer not to say'].map(gender => (
                  <label key={gender} className="tsf-gender-label-horizontal">
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                    />
                    {gender}
                  </label>
                ))}
              </div>
              {touched.gender && !formData.gender && (
                <div className="tsf-error-message">Please select your gender</div>
              )}
            </div>

            <div className="tsf-form-group">
              <label>Email Address <span className="tsf-required-star">*</span></label>
              <div className="tsf-input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={touched.email && !formData.email ? 'tsf-input-error' : ''}
                  required
                />
                {touched.email && !formData.email && (
                  <div className="tsf-error-message">Email is required</div>
                )}
              </div>
            </div>

            <div className="tsf-form-group">
              <label>Phone Number <span className="tsf-required-star">*</span></label>
              <div className="tsf-input-wrapper">
                <input
                  type="tel"
                  name="phone"
                  placeholder="(000) 000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={touched.phone && !formData.phone ? 'tsf-input-error' : ''}
                  required
                />
                {touched.phone && !formData.phone && (
                  <div className="tsf-error-message">Phone number is required</div>
                )}
              </div>
            </div>
          </div>

          {/* TRADING BACKGROUND */}
          <div className="tsf-section">
            <h3 className="tsf-section-title">
              TRADING BACKGROUND <span className="tsf-required-star">*</span>
            </h3>
            <p className="tsf-section-sub">Do you have prior trading experience?</p>
            <div className="tsf-radio-group">
              {['Yes', 'No'].map(option => (
                <label key={option} className="tsf-radio-label">
                  <input
                    type="radio"
                    name="experience"
                    value={option}
                    checked={formData.experience === option}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
            {touched.experience && !formData.experience && (
              <div className="tsf-error-message">Please select your trading experience</div>
            )}
          </div>

          {/* WHY CHOOSE US */}
          <div className="tsf-section">
            <h3 className="tsf-section-title">WHY CHOOSE US?</h3>
            <ul className="tsf-features-list">
              <li>✅ Expert Mentorship by Industry Professionals</li>
              <li>✅ Practical Learning with Real Market Examples</li>
              <li>✅ Live Trading Sessions & Doubt Solving</li>
              <li>✅ Career Guidance & Placement Support</li>
              <li>✅ Flexible Batches (Online & Offline)</li>
            </ul>
          </div>

          {/* DECLARATION */}
          <div className="tsf-section">
            <h3 className="tsf-section-title">
              DECLARATION <span className="tsf-required-star">*</span>
            </h3>
            <div className="tsf-declaration">
              <label className="tsf-declaration-label">
                <input
                  type="checkbox"
                  name="declaration1"
                  checked={formData.declaration1}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                <span>
                  I hereby confirm that all the information provided above is true and correct to the best of my knowledge. 
                  <span className="tsf-required-star"> *</span>
                </span>
              </label>
              {touched.declaration1 && !formData.declaration1 && (
                <div className="tsf-error-message">You must confirm this declaration</div>
              )}
              
              <label className="tsf-declaration-label">
                <input
                  type="checkbox"
                  name="declaration2"
                  checked={formData.declaration2}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                <span>
                  I agree to the Terms & Conditions and Privacy Policy. 
                  <span className="tsf-required-star"> *</span>
                </span>
              </label>
              {touched.declaration2 && !formData.declaration2 && (
                <div className="tsf-error-message">You must agree to the terms</div>
              )}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="tsf-btn-group">
            <button 
              type="submit" 
              className="tsf-btn tsf-btn-primary"
              disabled={!isFormValid()}
            >
              SUBMIT APPLICATION
            </button>
            <button 
              type="button" 
              className="tsf-btn tsf-btn-secondary"
              onClick={handleReset}
            >
              RESET FORM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdmissionForm;