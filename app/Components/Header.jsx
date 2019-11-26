import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerToggle: false
    };
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay() {
    if (this.state.hamburgerToggle) {
      this.setState({ hamburgerToggle: false });
    } else {
      this.setState({ hamburgerToggle: true });
    }
  }

  render() {
    return (
      <div className="header" style={{ display: this.props.display }}>
        <div className="header-navbar-container">
          <div className="header-logo">
            <img src="/img/sdcs-logo.png" alt="SDCS LOGO" />
          </div>
          <div className="header-navbar">
            <ul>
              <li className="menu-item">
                <NavLink to="/" activeClassName="selected">About Us</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/events" activeClassName="selected">Events</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/programs" activeClassName="selected">Programs</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/tuition" activeClassName="selected">Tuition</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/tour" activeClassName="selected">Schedule A Tour</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/blog" activeClassName="selected">Blog</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/apply" activeClassName="selected">Apply</NavLink>
              </li>
            </ul>
          </div>
          <div className="header-hamburger">
            <div className="header-hamburger-icon" onClick={this.changeDisplay}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div
          className="menu"
          style={
            this.state.hamburgerToggle
              ? { transform: "translate3d(0, 0, 0)" }
              : { transform: "translate3d(0, -100%, 0)" }
          }
        >
          <ul>
            <li className="menu-item">
              <NavLink to="/" activeClassName="selected" onClick={this.changeDisplay}>
                About Us
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/events" activeClassName="selected" onClick={this.changeDisplay}>
                Events
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/programs" activeClassName="selected" onClick={this.changeDisplay}>
                Programs
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/tuition" activeClassName="selected" onClick={this.changeDisplay}>
                Tuition
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/tour" activeClassName="selected" onClick={this.changeDisplay}>
                Schedule A Tour
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/blog" activeClassName="selected" onClick={this.changeDisplay}>
                Blog
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/appy" activeClassName="selected" onClick={this.changeDisplay}>
                Apply
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  display: PropTypes.string
};
