import React from 'react';
import '../../components/Styles/Footer.css';
import logo from "../../components/img/PSS.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import Instagram from " ../../components/img/Instagram.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
      <img src={logo} alt="logo pss" className="imgLogo"/>
      <p>
          Adresse: Dakar Point Immeuble Omar Dia
          <br />
          Numéro téléphone: +221778635153 - 336547499
          <br />
          Email: info@pss.com<br />
          ppssenegal@platformsanté.com
        </p>

         <div className="Footer-PSS">
        <h3>Copyright 2024 PSS-Platform de service de santé </h3> 
      </div> 

      </div>

      <div className="footer-right">
        <p>Suivez-nous: </p>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;









