import React from "react";
import { Container } from "react-bootstrap";
import linkedIn from "../assets/img/in.png";
import twitter from "../assets/img/Twitter-1.png";
import redes from "../assets/img/fLogo-1.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="upper-footer">
        <Container>
          <div className="upper-footer-content">
            <div className="upper-footer-left-content">
              <div className="upper-footer-left-content-img">
                <img src={redes} alt="" />
              </div>
              <div>
                <ul>
                  <li><a>Contact Us</a></li>
                  <li><a>Sign In</a></li>
                  <li><a>Join Now</a></li>
                  <li><a>Privacy Policy</a></li>
                  <li><a>Terms of Use</a></li>
                </ul>
              </div>
              <div>
              <ul>
                  <li><a>Copyright Policy</a></li>
                  <li><a>Fraternity Policy</a></li>
                  <li><a>Privacy Policy</a></li>
                  <li><a>Help Desk</a></li>
                  <li><a>Community Policy- Global</a></li>
                </ul>
              </div>
            </div>
           
            <div className="upper-footer-right-content">
              <p>Follow us on</p>
              <div className="follow-logo">
                <img src={linkedIn} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="lower-footer">
        <Container>
          <p>&#169;Redes 2021. All Rights Reserved.</p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
