import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {

  render() {
    return (

      <div className="footer">
        <div className="footer-top">
          <div className='footer-link'>
            <Link to="/">Terms and Conditions</Link>
          </div>
          <div className="footer-seperator">|</div>
          <div className='footer-link'>
            <Link to="/">Privacy Policy</Link>
          </div>          
          <div className="footer-seperator">|</div>
          <div>
            <a href="https://www.facebook.com/sandiegocodeschool/" target="_blank" rel="noopener">
              <img src={require("../img/facebook.png")} alt="Facebook Logo" />
            </a>
            <a href="https://instagram.com/sdcs_io" target="_blank" rel="noopener">
              <img src={require("../img/instagram.png")} alt="Instagram Logo" />
            </a>
            <a href="https://twitter.com/sdcs_io" target="_blank" rel="noopener">
              <img src={require("../img/twitter.png")} alt="Twitter Logo" />
            </a>
            <a href="https://www.linkedin.com/company/sandiegocodeschool/about/" target="_blank" rel="noopener">
              <img src={require("../img/linkedin.png")} alt="Linkedin Logo" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div> © 2019 San Diego Code School, LLC </div>
        </div>
      </div>
    );
  }
}
