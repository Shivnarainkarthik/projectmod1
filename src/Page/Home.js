// src/App.js
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './Home.css'; // Import your custom CSS
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <div className="app-container">
      <Navbar expand="lg" className="top-navbar">
        <Navbar.Brand href="#home">Wheel Wise</Navbar.Brand>
        <Nav className="ml-auto dealer">
          {user ? (
            <p className="Useraccount">{user.username}</p>
          ) : (
            <button className="custom-button" onClick={() => navigate("/signin")}>Sign In</button>
          )}
          <button className="custom-button" onClick={() => navigate("/cart")}>Cart</button>
        </Nav>
      </Navbar>

      <div className="video-background">
        <video autoPlay loop muted>
          <source src="assets/Bgvideo.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      <div className="centered-text">
        <p className="gun">Made Like a Gun</p>
      </div>

      <footer className="bottom-navbar">
        <nav className="footer-nav">
          <button className="footer-button" onClick={() => navigate("/bike")}>Bikes</button>
          <button className="footer-button" onClick={() => navigate("/parts")}>Parts</button>
          <button className="footer-button" onClick={() => navigate("/accessories")}>Accessories</button>
          <button className="footer-button" onClick={() => navigate("/contactus")}>Contact Us</button>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
