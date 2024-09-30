import React from 'react';
import './LandingPage.css';

const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </svg>
);

const Header = () => (
  <header className="header">
    <div className="header-left">
      <div className="logo">TH2N</div>
      <div className="delivery-info">
        <span>Delivery To</span>
        <span className="location">Rose Hill, Chennai</span>
        <svg className="dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    <nav>
      <ul className="nav-menu">
        <li className="active">Home</li>
        <li>Meals</li>
        <li>Nutrition</li>
        <li>Login</li>
      </ul>
    </nav>
    <div className="user-avatar">
      <img src="/api/placeholder/40/40" alt="User" />
    </div>
  </header>
);

const Hero = () => (
  <div className="hero">
    <img src="src\assets\background.png" alt="Salad" className="hero-image" />
    <div className="hero-content">
      <h1>Welcome Eliza!</h1>
      <h2>Basic Plan Selected</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="What was on your mind today?"
          className="search-input"
        />
        <button className="search-button">
          Search
        </button>
        <button className="ai-diet-button">
          <CameraIcon />
          <span>AI Diet</span>
        </button>
      </div>
    </div>
  </div>
);

const LandingPage = () => (
  <div className="landing-page">
    <Header />
    <Hero />
  </div>
);

export default LandingPage;