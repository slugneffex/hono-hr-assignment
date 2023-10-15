import React from "react";
import { Container } from "react-bootstrap";
import bannerbg from '../assets/img/bannerbg.png'

const HeroSection = () => {
  return (
    <div id="hero-section">
      <Container>
        <div className="hero-container">
          <img src={bannerbg} className="mobile bannerbg" alt="" />
          <div className="hero-text">
            <div className="text-1">
              <p>Welcome to Your Professional Fraternity!</p>
            </div>

            <div className="text-2">
              <p>Where Professionals People Network & Grow</p>
              <p>
                Explore opportunities and business partnerships at Redes.
                Nurture Win Win partnerships , meet Peers, Investors, Advisors,
                Founders.
              </p>
              <button className="sign-up-btn">Signup</button>
              <p>
                Already have an account? <a>Login</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="hero-side-div"></div>
    </div>
  );
};

export default HeroSection;
